import React from "react";
import { FcGoogle } from "react-icons/fc";
import '../styles/index.css'
const Index = () => {
  return (
    <>
      <div className="content">
        <div className="left">
          <div className="card-1 card container"></div>
          <div className="card-2 card"></div>
          <div className="card-3 card container"></div>
        </div>
        <div className="right">
          <h1>White Bord</h1>
          <form action="Home.jsx" method="post">
            <div className="inputs">
              <input
                type="email"
                id="useremail"
                name="txtemail"
                placeholder="Email"
              />

              <input
                type="password"
                name="txtpassword"
                id="userpass"
                placeholder="Password"
              />
              <a href="#">
                <p>Forgot password?</p>
              </a>
            </div>

            <div className="btn">
              <input className="btnlogin" type="submit" value="Login" />
              <p>Or with</p>
            </div>

            <div className="google">
              <i>
                <FcGoogle />
              </i>
              <p>Google</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
