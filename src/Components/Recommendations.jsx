import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
     <h1>Hi {user} your personal recommendations are here.</h1> 
    </div>
  )
}

export default Recommendations
