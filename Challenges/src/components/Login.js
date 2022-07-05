import React from "react";
import { Link } from "react-router-dom";

const style={
    gridColumn: "5/9",
    backgroundColor: "#fff",
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
    padding: "20px 40px",
    borderRadius: "5px",
    margin: "2em 3em 9em 3em",
    minHeight: "30vh"
  }
const rootStyle = {
  backgroundColor: "rgb(252, 251, 251)",
  color: "#333",
  fontFamily: "'Muli', sans-serif",
  display: "grid",
  gridTemplateColumns: "repeat(12,1fr)",
  justifyItems:"stretch",
  minHeight: "100vh",
  overflow: "hidden",
  margin: 0
}

const Login = () => {
    return (<div className="loginRoot" style={rootStyle}>
       <div class="container" style={style}>
      <h1>Login</h1>
      <div class="error">
                sdfdsf
      </div>
      <form action="owner/index.html" id="login-form" >
        <div class="form-control">
          <input type="text" id="username" />
          <label>Username</label>
        </div>

        <div class="form-control">
          <input type="password" id="password" />
          <label>Password</label>
        </div>

        <button class="btn">Login</button>

        <p class="text">Don't have an account <a href="sign-up.html">Register</a> </p> 
        <p class="text">Go to <Link to="/">Homepage</Link> </p> 
      </form>
    </div>
      </div>
    )
}

export default Login;