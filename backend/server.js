import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import crypto from 'crypto'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
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
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise
mongoose.set('useCreateIndex', true);


const User = mongoose.model('User', {
  name: {
    type: String, 
    unique: true
  },
  email:{
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken:{
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

const Content = mongoose.model('Content', {
  title:  {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  content: {
    type: String,
    maxlength:1500
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
  const user = await User.findOne({accessToken: req.header('Authorization')})
  if (user){
    req.user = user;
    next()
  } else {
    res.status(401).json({loggedOut: true})
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
app.get('/secrets', (req,res) =>{
  res.json({secret: 'This is a super secret message'})
})

//Registration (creates the user)
app.post('/signup', async (req,res)=>{
  try{
    const {name, email, password} = req.body
    const user = await new User({name, email, password: bcrypt.hashSync(password)}).save()
    // await user.save()
    res.status(201).json({id: user._id, accessToken: user.accessToken})
  } catch (err){
    res.status(400).json({message: 'could not create user', errors: err.errors})
  }
})

//Login (finds the user)
app.post('/login', async (req, res) => {
try {
  const { name, password } = req.body
  const user = await User.findOne({ name })
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(201).json({ userId: user._id, accessToken: user.accessToken})
  } else {
    res.status(404).json({ notFound: true })
  }
} catch (err) {
  res.status(404).json({ notFound: true })
}
})

// app.get('/feed', async (req, res) => {
//   const thoughts = await Thought.find().sort({createdAt: 'desc'}).limit(20).exec()
//   res.json(thoughts)
// })

// app.post('/feed', async (req, res) => {
//   const { message } = req.body
//   const thought = new Thought({message})
//    console.log(thought)
//    try {
//     const savedThought = await thought.save()
//     res.status(201).json(savedThought)
//     } catch (err) {
//     res.status(400).json({ message: 'Could not save post', error: err})
//   }
// })

// app.post('/feed/:thoughtId/like', async (req, res) => {
//   const {thoughtId} = req.params
//   const like = awaitpostt.findById(thoughtId)
  
//   if(like) {
//     like.hearts += 1
//     like.save()
//     res.json(like)
//   } else {
//     res.status(404).json({message: 'Could not thought', error: err.errors})
//   }
//   })

  app.get('/about', (req, res) => {
    res.send('About us')
  })
  app.post('/blog', async (req,res) =>{
    try {
      const { title, content } = req.body
      const article = await new Content ({
        title,
        content,
        createdBy: req.user
      }).save()
      res.status(201).json(article)
    } catch (err){
      res.status(400).json({message: 'oops! Try again', error: err.errors })
    }
  })
  app.get('/blogpost', authenticateUser)
  app.get('/blogpost', (req, res) => {
    res.send('Blogpost ')
  })

  app.get('/blog', async (req, res) =>{
    try{
      const articles = await Content.find().populate({
        path:'createdBy',
        select:'userName'
      }).sort({ createdAt: 'desc'}).exec()
      res.json(articles)
    } catch (err) {
      res.status(400).json({message: 'Oh no!'})
    }
  })


  app.get('/blog/:id', async (req, res) => {
    const {id} = req.params
    try{
      const content = await Content.findById(id).populate({
        path: 'createdBy',
        select: 'userName'
      })
      res.json(content)
    } catch (err) {
      res.status(400).json({message: 'oopsy!'})
    }
  })

  app.get('/events', (req, res) => {
    res.send('Events ')
  })

  app.post('/contact', (req, res) => {
    const mail = {
      from: name,
      to: 'pimpmahshades@gmail.com',  // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
     
      if (err) {
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

