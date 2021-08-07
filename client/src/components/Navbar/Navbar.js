import React from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { logOutUser } from '../../store/actions/authActions';
import './styles.css';

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onLogOut = (event) => {
    event.preventDefault();
    dispatch(logOutUser(history));
  };

  return (
    <nav className="navbar">
      <h2 className="logo">MERN Boilerplate</h2>
      <ul className="nav-links flex-1">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        {auth.isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link to={`/${auth.me.username}`}>Profile</Link>
            </li>
            {auth.me?.role === 'ADMIN' && (
              <li className="nav-item">
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li className="flex-1" />
            <img className="avatar" src={auth.me.avatar} />
            <li className="nav-item" onClick={onLogOut}>
              <a href="#">Log out</a>
            </li>
          </>
        ) : (
          <>
            <li className="flex-1" />

            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
