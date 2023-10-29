import "./signup.css";

const SignupForm = () => {
  return (
    <div className="signup-form-box">
      <form className="signup-form">
        <span className="signup-subtitle">
          Create a free account with your email.
        </span>
        <div className="signup-form-container">
          <input type="text" className="signup-input" placeholder="Full Name" />
          <input type="email" className="signup-input" placeholder="Email" />
          <input
            type="password"
            className="signup-input"
            placeholder="Password"
          />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;
