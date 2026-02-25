import React, { useEffect, useState } from "react";
import style from "./style/Home.module.css";
import logo from "./assets/logo.png";
import chat from "./assets/editChat.png";

const generateInitialdata = [
  {
    heading: "Hi, what is the weather",
    para: "Get immediate AI generated response",
  },
  {
    heading: "Hi, what is my location",
    para: "Get immediate AI generated response",
  },
  {
    heading: "Hi, what is the temperature",
    para: "Get immediate AI generated response",
  },
  { heading: "Hi, how are you", para: "Get immediate AI generated response" },
];

const Home = () => {
  const[isOpen, setIsOpen]=useState(false);

  //prevent bg scroll when sidebar open
  useEffect(()=>{
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  },[isOpen])
  return (
    <>
      <div className={style.Container}>

        {/* sidebar */}
        <div className={`${style.sideBar} ${isOpen ? style.active: ""}`}>
          <div className={style.topSection}>
            <img src={logo} alt="logo" className={style.logoimg} />
            <h3 className={style.newChat}>New Chat</h3>
            <img src={chat} alt="image" className={style.logoimg2} />
          </div>
          <div className={style.conversation}>
            <h4
              style={{
                background: "#D7C7F4",
                color: "#414146",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              Past Conversations
            </h4>
          </div>
        </div>
              {/* overlay */}
              {isOpen && (
                <div className={style.overlay} onClick={() => setIsOpen(false)}></div>
              )}

          {/* chat area */}
        <div className={style.chatArea}>
          <div className={style.chatHeader}>
            <h2>BOT AI</h2>

          {/* Hamburger button on mibile screens */}
          <button 
          className={style.menuBtn} 
          onClick={() => setIsOpen(true)}
          >☰</button>
          </div>

          {/* Intro Content */}
          <div className={style.introContent}>
            <h2 style={{ color: "#000000" }}>How can i help you Today?</h2>
            <img src={logo} alt="logoImg" />

            <div className={style.gridContainer}>
              {generateInitialdata.map((item) => (
                <div className={style.card}>
                  <h3>{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              ))}
            </div>
          </div>
              
              {/* Input Section */}
          <div className={style.inputWrapper}>
            <div className={style.inputSection}>
              <input type="text" className={style.textInput} />

              <div className={style.buttonGroup}>
                <button className={style.askBtn}>Ask</button>
                <button className={style.saveBtn}>Save</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
