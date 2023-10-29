import "./login.css";

const LoginForm = () => {
  return (
    <div className="login-form-box">
      <form className="login-form">
        <span className="login-subtitle">Log into your account</span>
        <div className="login-form-container">
          <input type="email" className="login-input" placeholder="Email" />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
