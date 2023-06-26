import { NavLink } from "react-router-dom";
import "./register.scss";
import { AuthContext } from "../../context/auth-context";
import { useState } from "react";


const Register = () => {

  const {signupHandler} = AuthContext;

  const [signupFormData, setSignupFormData] = useState({
    firstName : "",
    lastName: "",
    username: "",
    password : ""
  })
  const inputHandler = (event) =>{
    const { name, value } = event;
    setSignupFormData({ ...signupFormData, [name]: value })
  }
  const signupFormSubmitHandler = (event) =>{
    event.preventDefault()
    signupHandler(signupFormData);
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left-card">
          <h1>Hello World..</h1>
          <p>
            Hey we ahve to right here about my app and seems same content for
            both pages login and register page 
          </p>
          <span>Already, have an account?</span>
          <NavLink to="/login"><button>Login</button></NavLink>
        </div>
        <div className="right-card">
            <h1>Register</h1>
            <form onSubmit={signupFormSubmitHandler}>
                <input 
                  type="text"
                  name="firstName"
                  value={signupFormData.firstName} 
                  placeholder="Firstname"
                  onChange={inputHandler}
                />
                <input 
                  type="text" 
                  placeholder="Lastname"
                  name="lastName"
                  value={signupFormData.lastName}
                  onChange={inputHandler}
                />
                <input 
                  type="text" 
                  placeholder="email id"
                  name="usename"
                  value={signupFormData.username}
                  onChange={inputHandler}
                />
                <input 
                  type="password" 
                  placeholder="password"
                  name="usename"
                  value={signupFormData.username}
                  onChange={inputHandler}
                />
                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
