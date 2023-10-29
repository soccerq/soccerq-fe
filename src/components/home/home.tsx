import React, { useState } from "react";
import LoginForm from "../login/login";
import SignupForm from "../signup/signup";
import BlueLock from "../../assets/images/bluelock6.jpg";
import Google from "../../assets/svg/google.svg";
import SoccerQLogo from "../../assets/svg/soccerq-text-logo.svg";
import "./home.css";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="welcome-page">
      <div className="welcome-image">
        <img
          src={BlueLock}
          alt="welcome-image"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
      </div>
      <div className="login-signup-section">
        <img
          src={SoccerQLogo}
          alt="logo"
          style={{ width: "80%", marginTop: "5px" }}
        />
        <div className="login-signup-toggle">
          <h3
            className="login-toggle"
            style={
              showLogin ? { textDecoration: "underline", color: "#7ED957" } : {}
            }
          >
            Login
          </h3>
          <label className="switch">
            <input type="checkbox" onClick={() => toggleForm()} />
            <span className="slider"></span>
          </label>
          <h3
            className="signup-toggle"
            style={
              showLogin ? {} : { textDecoration: "underline", color: "#7ED957" }
            }
          >
            Signup
          </h3>
        </div>
        {showLogin ? <LoginForm /> : <SignupForm />}
        <div className="google-login-button">
          <img src={Google} alt="google-sign-in" />
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default App;
