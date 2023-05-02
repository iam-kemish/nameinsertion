import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
     <h1> hello {user} from the recommendations.</h1> 
    </div>
  )
}

export default Recommendations
