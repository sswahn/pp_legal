import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { config } from './config'
import TermsUS from './components/TermsUS'
import TermsCA from './components/TermsCA'
import PrivacyPolicy from './components/PrivacyPolicy'
import ContactUs from './components/ContactUs'


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={config.routes.terms_us} component={TermsUS} />
        <Route exact path={config.routes.terms_ca} component={TermsCA} />
        <Route exact path={config.routes.privacy_policy} component={PrivacyPolicy} />
        <Route exact path={config.routes.contact} component={ContactUs} />
      </Switch>
    </Router>
  )
}

export default AppRouter
