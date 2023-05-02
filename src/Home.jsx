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
    <div className='container my-3'>
       <div >
        <h1>{user}'s home</h1><br/>
       <h2 style={{fontFamily: "courier, monospace"}}> Hey there🧑,  Firstly type your name on the input field and there click The edit name to function according to your name.</h2><br></br>
       <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
       <button style={{marginLeft: "6px"}} className='btn btn-primary'onClick={handleClick}>Edit name</button>
       </div>
        <div className='my-3'>
        <Link  className='link-primary link-offset-2 link-opacity-35 link-opacity-100-hover' to="/dashboard" style={{textDecoration:"none", marginRight: "10px", border: "0.5px solid red", padding: "6px"}}>Your Dashboard.</Link>
       
        <Link className='link-danger link-offset-2 link-underline-opacity-25 link-opacity-100-hover' style={{textDecoration:"none", marginLeft: "10px", border: "0.5px solid #646423", padding: "6px"}} to="/recommendations">Your Recommendations..</Link>
        
        </div>
       
      
    </div>
  )
}

export default Home
