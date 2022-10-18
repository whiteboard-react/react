import React from "react";
import { FcGoogle } from "react-icons/fc";
import Tela from "../img/Tela.png";
import Tela2 from "../img/Tela2.png";
import Tela3 from "../img/Tela3.png";
import { Link } from "react-router-dom";
import Home from "./Home";
import "../styles/index.css";
const Index = () => {
  return (
    <>
      <div className="content">
        <div className="left">
          <div className="card-1 card container">
            <img src={Tela} alt="" />
          </div>
          <div className="card-2 card">
            <img src={Tela2} alt="" />
          </div>
          <div className="card-3 card container">
            <img src={Tela3} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>White Bord</h1>
          <form action="" method="post">
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
              <Link to={"/Home"}>
                <input className="btnlogin" type="submit" value="Login" />
              </Link>
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
