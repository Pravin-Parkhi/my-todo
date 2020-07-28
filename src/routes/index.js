import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Profile from '../app/profile/profile.component'
import BaseLayout from '../common/base-layout/base-layout.component'


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <BaseLayout>
          <Route exact path='/' render={() => (<Redirect to='/my-todo' />)} /> 
          <Route exact path='/my-todo' component={Profile} />
        </BaseLayout>
      </Switch>
    </BrowserRouter>
  )
}