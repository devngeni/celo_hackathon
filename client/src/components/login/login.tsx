import React, { useState, useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";

export function Login() {
  const { login } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    //validate login
    if (!phoneNumber) {
      console.log("Please input phone number");
    }
    if (!password) {
      console.log("Please input password");
    }
    login({
      phoneNumber,
      password,
    });
  };

  return (
    <div className="container-B">
      <div className="container-image">
        <image className="bg-image">
          <img src={require("../../assets/celo.png")} alt="celo"></img>
        </image>
      </div>
      <div className="container-">
        <div className="login-header">SWAP CRYPTO</div>
        <div>
          <input
            type="text"
            placeholder="phone number"
            className="input-phoneNo"
            onChange={(e) => setPhoneNumber(e.target.value.trim())}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            className="input-password"
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          <div className="button-container">
            <div>
              <Link to="/">
                {" "}
                <button onClick={handleLogin} className="button">
                  Login
                </button>
              </Link>
            </div>
            <div className="register-text"></div>
          </div>
        </div>

        <div className="reg">
          <div className="reg-text">Don’t have an account?</div>
          <Link to="/register">
            <button className="reg-btn"> Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
