import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Engagement from './views/engagement'
import Map from './views/map'
import Feedback from './views/feedback'
import Partners from './views/partners'
import Founders from './views/founders'
import Events from './views/events'
import Home from './views/home'
import Plants from './views/plants'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Engagement} exact path="/engagement" />
        <Route component={Map} exact path="/map" />
        <Route component={Feedback} exact path="/feedback" />
        <Route component={Partners} exact path="/partners" />
        <Route component={Founders} exact path="/founders" />
        <Route component={Events} exact path="/events" />
        <Route component={Home} exact path="/" />
        <Route component={Plants} exact path="/plants" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
