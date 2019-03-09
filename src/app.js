import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Nav, Users, Things } from './components'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const [things, setThings] = useState([])

  const compare = (a, b) => {
    if (a.favorite) return a.favorite.rank < b.favorite.rank ? -1 : 1
  }

  useEffect(() => {
    axios
      .get('/users')
      .then(response => setUsers(response.data))
      .then(() => axios.get('/things'))
      .then(response => setThings(response.data.sort((a, b) => compare(a, b))))
      .catch(e => console.error(e))
  }, [])

  return (
    <HashRouter>
      <div>
        <div>
          <Nav userCount={users.length} thingCount={things.length} />
        </div>
        <div>
          <Switch>
            <Route path="/users" exact render={() => <Users users={users} />} />
            <Route path="/things" exact render={() => <Things things={things} />} />
            <Redirect to="/users" />
          </Switch>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
