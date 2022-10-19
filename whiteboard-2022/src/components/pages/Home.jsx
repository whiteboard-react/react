import React from "react";
import "../styles/Home.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header id="header">
        <nav className="container">
          <img
            src="https://avatars.githubusercontent.com/u/64161845?v=4"
            alt=""
          />
          <h2>user name</h2>
        </nav>
      </header>

      <div className="recent-select container">
        <h1>Recente Whitebord</h1>
        <select name="" id="selectOpnion">
          <option value="" selected>
            Last modified
          </option>
          <option value="">Date created</option>
          <option value="">Alphabetical</option>
        </select>
      </div>

      <main>
        <section>
          <div className="card container">
            <div className="new">
              <i>
                <AiOutlinePlus />
              </i>
              <Link className="linkNew" to={"/Whiteboard"}>
                <h1>New Whitebord</h1>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <hr />
        <div className="footer container">
          <h2>@ 2022 Whiteboard</h2>

          <a href="https://www.google.com/" target="_blank">
            <h2>Terms & Conditions Privacy Policy</h2>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
