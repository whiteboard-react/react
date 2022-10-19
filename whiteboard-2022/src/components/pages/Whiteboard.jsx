import React from "react";
import "../styles/Whiteboard.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";

const Whiteboard = () => {
  return (
    <>
      <header id="header2">
        <nav className="container">
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/64161845?v=4"
              alt=""
            />
            <h2>user name</h2>
       
          <div className="function">
            <div className="can">
              <i>
                <AiOutlineVideoCamera />
              </i>
            </div>
            <div className="addUser">
              <i>
                <BiUserPlus />
              </i>
            </div>
            <div className="share">
              <i>
                <AiOutlineShareAlt />
              </i>
            </div>
            </div>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Whiteboard;
