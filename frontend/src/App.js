import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";

 import { user } from './reducers/user.js'
 import { messages, message } from './reducers/messages.js'
 import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { Home } from 'components/Home'
import { Signup } from 'components/Signup'
import { Login } from 'components/Login'
import { Secrets } from 'components/Secrets'
import { About } from 'components/About'
import { Post } from 'components/Post'
import { Contact } from 'components/Contact'
// import { MessageList} from 'components/MessageList'
import { Feed } from 'components/Feed'
import { Landing } from 'components/Landing'
import { Blog } from 'components/Blog'
// import { Blog } from 'components/BlogWithReducer'

import  {NavigationTool} from 'components/NavigationTool'


const reducer = combineReducers({ user: user.reducer, messages: message.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="container">
        <h3>Hello</h3>
        <NavigationTool />
        <Switch>
          <Route path="/" exact>
           <Home />
           {/* <Landing /> */}
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/secrets" exact>
            <Secrets />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/feed" exact>
            {/* <MessageList /> */}
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
