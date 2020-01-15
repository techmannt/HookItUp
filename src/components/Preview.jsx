import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Preview = (props) => {
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
    <section className="py-1">
      <div className="card">
        <div className="card-body shadow">
          <ul className="list-group">
            {users.map(user => (

              <p key={user.id} className="shadow">
                <li className="list-group-item body-text"> <Link className="btn btn-primary" to={`${user.id}/details`}>View Details for ID: {user.id}</Link></li>
                <li className="list-group-item body-text">{user.name}</li>
                <li className="list-group-item body-text">{user.username}</li>
                <li className="list-group-item body-text">{user.email}</li>
              </p>

            ))}
          </ul>

        </div>
      </div>
    </section>

  )

}

export default Preview;
