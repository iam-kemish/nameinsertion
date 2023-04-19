import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Dashboard = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>Hi {user}, Your dashboard is here.</h1>
    </div>
  )
}

export default Dashboard
