import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Dashboard = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1 style={{ fontFamily: 'cursive'}}>Hi {user}, euta kura vnnu x sunxau vane final entry hera🙂.</h1>
    </div>
  )
}

export default Dashboard
