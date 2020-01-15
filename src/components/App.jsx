import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import "isomorphic-fetch";
import "es6-promise";
import Preview from './Preview';
import Details from './Details';

const App = () => {

  return (

    <div className="container">
      <Router>
        <>
          <p><Link to="/"><button className="btn btn-warning text-light">Preview All</button></Link></p>
          <Switch>
            <Route exact path="/" component={Preview} />
            <Route path="/:id/details" component={Details} />
          </Switch>
        </>
      </Router>
    </div>

  )

}

export default App;
