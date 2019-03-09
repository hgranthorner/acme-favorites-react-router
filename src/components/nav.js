import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ userCount, thingCount }) => {
  return (
    <div>
      <h1>Acme Favorites</h1>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/users" className="nav-link" activeClassName="active">
            users {userCount}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/things" className="nav-link" activeClassName="active">
            things {thingCount}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
