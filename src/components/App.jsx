import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import "es6-promise";
import Preview from './Preview';
import Details from './Details';

const App = () => {
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   let res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   let users = await res.json();
  //   setUsers(users);
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    //
    //   <div className="py-1" key={users.id}>
    //     <div className="card">

    //       <div className="card-body shadow">
    //         <h4 className="card-title">{props.films.title}</h4>
    //         <p className="body-text">{props.films.description}</p>
    //         <p className="body-text text-muted">Release date: {props.films.release_date}</p>
    //         <Link className="btn btn-primary" to={`/films/${props.films.id}`}>View Details</Link>
    //       </div>

    //     </div>
    //   </div>

    //
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
