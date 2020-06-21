import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import crypto from 'crypto'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import { doesNotMatch } from 'assert'

const nodemailer = require('nodemailer');
const creds = require('./config');



const transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)



const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalproject"
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.Promise = Promise
mongoose.set('useCreateIndex', true);


const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

const Content = mongoose.model('Content', {
  id: {
    type: Number
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})



const port = process.env.PORT || 8080
const app = express()

// Middleware
const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({
    accessToken: req.header('Authorization')
  })
  if (user) {
    req.user = user;
    next()
  } else {
    res.status(401).json({
      loggedOut: true
    })
  }
}

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

//protected endpoint
app.get('/secrets', authenticateUser)
app.get('/secrets', (req, res) => {
  res.json({
    secret: 'This is a super secret message'
  })
})

//Registration (creates the user)
app.post('/signup', async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body
    const user = await new User({
      name,
      email,
      password: bcrypt.hashSync(password)
    }).save()
    // await user.save()
    res.status(201).json({
      id: user._id,
      accessToken: user.accessToken
    })
  } catch (err) {
    res.status(400).json({
      message: 'could not create user',
      errors: err.errors
    })
  }
})

//Login (finds the user)
app.post('/login', async (req, res) => {
  try {
    const {
      name,
      password
    } = req.body
    const user = await User.findOne({
      name
    })
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        userId: user._id,
        accessToken: user.accessToken
      })
    } else {
      res.status(404).json({
        notFound: true
      })
    }
  } catch (err) {
    res.status(404).json({
      notFound: true
    })
  }
})

// app.post('/resetpassword', (req, res, next) =>{
//   const email = req.body

//   return User.findOne({email})
//   .then((user) => {
//     if (!user) {
//       next({
//         error: {
//           message: `User doesn't exist`
//         }
//       })
//     }
//     crypto.randomBytes(20, function(err, buf){
//       const token = buf.toString('hex')
//       user.resetPassword.token = token
//       user.resetPassword.expiration = Date.now() + 1000 * 60 * 60



//     })
//   })
  
// })


// app.post('/forgot', req, res) => {
//   const thisUser = getUser(req.body.email)
//   if(thisUser) {
//     const id =uuidv1()
//     const request = {
//       id, 
//       email: thisUser.email
//     }
//     createResetRequest(request)
//     sendResetLink(thisUser.email, id)
//   }
// }

// app.post('/reset', resetPassword)

// app.post('/reset/token', resetPasswordToken, resetCallback)
// app.get('/reset-password', (req, res) => {
//   const { token } = req.query
//   res.status(200).send(token)
// })

app.post('/resetpassword', (req, res) => {
  if (req.body.email === ''){
    res.status(400).send('email required')
  }
  console.error(req.body.email)
  User.findOne({
    where: {
      email: req.body.email,
    }
  })
  .then((user)=>{
    if (user ==null){
      console.error('email not in database')
      res.status(403).send('email not found')
    } else {
      const token = crypto.randomByton(20).toString('hex')
      user.update({
        resetpasswordToken: token,
        resetpasswordExpires: Date.now() + 3600000
      })

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`
        }
      })

      const mailOptions = {
        from: 'pimpmahshades@gmail.com',
        to: `${user.email}`,
        subject: `Link to reset password`,
        text: 'You are receiving this because a request of reset password for your account was made. Please click on the following link'
        `http://localhost:8080/reset/${token}`

      }
      console.log('sending mail with new password')

      transporter.sendMail(mailOptions, (err, response) =>{
        if(err){
          console.error('there was an error:', err)
        } else {
          console.log('here is the res:', response)
          res.status(200).json('recovery email sent')
        }
      })
    }
  })
})



app.get('/about', (req, res) => {
  res.send('About us')
})
app.post('/blogpost', authenticateUser)
app.post('/blogpost', async (req, res) => {
  try {
    console.log(JSON.stringify(req.body))
    const {
      content
    } = req.body
    const article = await new Content({
      content,
      createdBy: req.user
    }).save()
    res.status(201).json(article)
  } catch (err) {
    res.status(400).json({
      message: 'oops! Try again',
      error: err.errors
    })
  }
})


app.get('/blog', async (req, res) => {
  try {
    const articles = await Content.find().populate({
      path: 'createdBy',
      select: 'userName'
    }).sort({
      createdAt: 'desc'
    }).exec()
    res.json(articles)
  } catch (err) {
    res.status(400).json({
      message: 'Oh no!'
    })
  }
})


app.get('/blog/:id', async (req, res) => {
  const {
    id
  } = req.params
  try {
    const content = await Content.findById(id).populate({
      path: 'createdBy',
      select: 'userName'
    })
    res.json(content)
  } catch (err) {
    res.status(400).json({
      message: 'oopsy!'
    })
  }
})

app.get('/admin', authenticateUser)
app.get('/admin', (req, res) => {
  res.send('Admin stuff')
})

app.get('/events', (req, res) => {
  res.send('Events ')
})

app.post('/contact', (req, res) => {
  const {
    name,
    email,
    message
  } = req.body

  const mail = {
    from: name,
    to: 'pimpmahshades@gmail.com',
    subject: 'New Message from Contact Form',
    text: `${name}, ${email}, ${message}`
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(JSON.stringify(err))
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})