import React, { useContext } from 'react'
import { UserContext } from '../Context/Usecn'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
     <h1> Mero naam chai kemish ani {user} i find you really cute, lovable and warm person. And i wanna know you more. Be my special one 🧑‍🤝‍🧑</h1> 
    </div>
  )
}

export default Recommendations
