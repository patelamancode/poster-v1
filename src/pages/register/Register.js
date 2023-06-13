import "./register.scss";

const Register = () => {
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
          <button>Login</button>
        </div>
        <div className="right-card">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Firstname" />
                <input type="text" placeholder="Lastname" />
                <input type="text" placeholder="email adderess" />
                <input type="password" placeholder="password" />
                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
