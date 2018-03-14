import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Roster from './Roster'
import Test from './Test'
import Caffee from './Caffee'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/test' component={Test}/>
      <Route path='/caffee/:id' component={Caffee}/>
    </Switch>
  </main>
)

export default Main
