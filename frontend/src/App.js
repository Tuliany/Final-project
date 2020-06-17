import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from "react-redux";

 import { user } from './reducers/user.js'
 import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import { CSSTransition,SwitchTransition } from 'react-transition-group'


import { Home } from 'Pages/Home'
import { Signup } from 'components/Signup'
// import { SlideShow } from 'components/SlideShow'
import { Login } from 'components/Login'
import { Secrets } from 'components/Secrets'
import { About } from 'Pages/About'
import { BlogFeed } from 'components/BlogFeed'
import { BlogArticle } from 'components/BlogArticle'
import { Landing } from 'components/Landing'
import { BlogPost } from 'components/BlogPost'
import { Contact } from 'Pages/Contact'

import  {NavigationTool} from 'components/NavigationTool'


const reducer = combineReducers({ user: user.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationTool />
        <SwitchTransition>
        <CSSTransition
          timeout={{ enter: 300, exit: 300 }}
        >
        <Switch>
          <Route path="/" exact>
           <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/admin" exact>
            <Secrets />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/blogpost" exact>
            <BlogPost />
          </Route>
          <Route path="/blog" exact>
            <BlogFeed />
          </Route>
          <Route path="/blog/:id" exact>
            <BlogArticle />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        </CSSTransition>
      </SwitchTransition>
     </BrowserRouter>
    </Provider>
  )
}
