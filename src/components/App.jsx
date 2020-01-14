import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import "es6-promise";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (

    <Router>
    <>
      <p><Link to="/"><button className="btn btn-warning text-light">Preview All</button></Link></p>

      <Switch>
        <Route exact path="/" component={Preview} />
        <Route path="/:id/details" component={Details} />
      </Switch>
    </>
  </Router>


  )

}
