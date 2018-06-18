import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import DynamicPage from './originalTutorialComponent/DynamicPage'
import LoginPage from './loginTemplate/LoginPage'
import DataTable from './dataTableTemplate/DataTable'
import SideBar from './sideBarTemplate/SideBar'
import D3Template from './d3Template/D3Template'
import NoMatch from './NoMatch'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dynamic" component={DynamicPage} />
              <Route exact path="/login-template" component={LoginPage} />
              <Route exact path="/data-table-template" component={DataTable} />
              <Route exact path="/side-bar-template" component={SideBar} />
              <Route exact path="/d3-template" component={D3Template} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes
