import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Landing } from './components/Landing/Landing';
import { Stats } from './components/Stats/Stats';


function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/stats' component={Stats} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;
