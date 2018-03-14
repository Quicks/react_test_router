import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Roster from './components/Roster'
import Test from './components/Test'
import Caffee from './components/Caffee'

const routes=(
    <BrowserRouter >
      <Route exact path='/' component={Welcome}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/test' component={Test}/>
      <Route path='/caffee/:id' component={Caffee}/>
    </BrowserRouter >
)
export default routes;
