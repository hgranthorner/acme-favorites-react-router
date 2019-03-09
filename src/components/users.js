import React from 'react'

const Users = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <ul>
            {user.favorites
              .sort((a, b) => (a.rank < b.rank ? -1 : 1))
              .map(favorite => (
                <li key={favorite.id}>
                  {favorite.thing.name} (Ranked: {favorite.rank})
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Users
