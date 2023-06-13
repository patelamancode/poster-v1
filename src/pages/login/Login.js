import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left-card">
          <h1>Hello World..</h1>
          <p>
            Hey we ahve to right here about my app and seems same content for
            both pages login and register page 
          </p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right-card">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
