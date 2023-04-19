import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './Context/Usecn'

const Home = () => {
    const [user, setUser] = useContext(UserContext)
    const[inputValue, setInputValue] = useState("")
    const handleClick = ()=>{
        setUser(inputValue)
    }
  return (
    <div>
       <div>
       <h1>{user}'s Home</h1>
       <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
       <button className='btn btn-primary' onClick={handleClick}>Edit name</button>
       </div>
        <Link className='link-primary link-offset-2 link-opacity-25 link-opacity-100-hover' to="/dashboard" style={{textDecoration:"none", marginRight: "10px"}}>Your dashboard</Link>
        <Link className='link-success link-offset-2 link-underline-opacity-25 link-opacity-100-hover' style={{textDecoration:"none", marginLeft: "10px"}} to="/recommendations">Your Recommendations</Link>
       
      
    </div>
  )
}

export default Home
