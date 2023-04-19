import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
     <h1> Mero naam chai kemish ani {user} i find you really cute🤩 and i wanna know you more🥳 .</h1> 
    </div>
  )
}

export default Recommendations
