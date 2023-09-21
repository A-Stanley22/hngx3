import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { UserAuth } from "../context/AuthContext"


export default function LogIn() {
    const initialFormData = {
        email: "",
        password: ""
    }
    const {currentUser, logIn} = UserAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(false)

    function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
    }
    
    async function handleLogin(e) {
    e.preventDefault()
   try {
       await logIn(formData.email, formData.password)
    } catch (err) {
      console.error(err.message)
        }

    if (currentUser) {
        navigate('/')
       toast.success("You're logged!")
        setFormData(initialFormData)
    } else {
        setError(true)
       }
    
 }


  return (
<div className="box-form">
	<div className="left">
		<div className="overlay">
		<h1>Drag Image</h1>
		<p>Welcome to drag image website</p>
		<span>
			<p>login with social media</p>
			<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
		</span>
		</div>
	</div>
	
	
	<form onSubmit={handleLogin} className="right">
    <div>
		<h2 className="text-2xl font-bold">Enter Login Details</h2>
	  {error && <p className="text-red-600 center font-playfair text-sm italic text-center font-bold">Incorrect login details!!</p>}
	</div>
		<div className="inputs">
			<input
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your email..."
                className=" border-2 pl-2 rounded-md bg-transparent text-black w-full h-full placeholder:text-white outline-none py-2 px-1"
                type="email"
                name="email"
                id="email"  />
			<br />
			<input 
                value={formData.password}
                onChange={handleChange}
                placeholder="enter your password..."
                className=" border-2 pl-2 rounded-md bg-transparent text-black w-full h-full placeholder:text-white outline-none py-2 px-1"
                type="password"
                name="password"
                id="password" />
		</div>
			
			<br /><br />
			
		<div className="remember-me--forget-password">
            <label>
                <input type="checkbox" name="item"/>
                <span className="text-checkbox">Remember me</span>
            </label>
			<p>forget password?</p>
		</div>
			
        <br />
        <button type="submit">Login</button>
	</form>
	
</div>
  )
}
