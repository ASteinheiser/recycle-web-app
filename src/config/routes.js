import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '../containers/layout'
import Map from '../containers/map'
import Rewards from '../containers/rewards'
import More from '../containers/more'
import NotFound from '../components/not-found'

export default (
  <Route>

    <Route path="/" component={Layout}>

      <IndexRoute component={Map} />

      <Route path="rewards" component={Rewards} />

      <Route path="more" component={More} />

    </Route>

    <Route path="*" status={404} component={NotFound} />

  </Route>
)
