import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
          <label>Email</label>
          <input type="text" className="LoginInput" placeholder="Enter your email..." />
          <label>Password</label>
          <input type="password" className="LoginInput" placeholder="Enter your password..." />
          <button className="loginButton">Login</button>  
      </form>
      <button className="loginRegisterButton">Register</button>   
    </div>
  )
}
