import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, logOut } = useAuthContext();
  console.log(user.name);

  return (
    <>
      <h2>Dashboard</h2>
      <Link to="/">Homepage</Link>
      <p>{user.name}</p>
      <button onClick={logOut}>logout</button>

    </>
  )
}
