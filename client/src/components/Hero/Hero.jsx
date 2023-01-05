import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
          <div className="hero-container">
            <div className="first">
              <div className="top">
                <div className="card">
                  <button className="btn-cat">men</button>
                  <img src="./images/men2.jpg" alt="" className="first" />
                  <img src="./images/men1.jpg" alt="" className="second" />
                </div>
              </div>
              <div className="middle">
                <div className="card">
                  <button className="btn-cat">women</button>
                  <img src="./images/women2.jpg" alt="" className="first" />
                  <img src="./images/women1.jpg" alt="" className="second" />
                </div>
              </div>
              <div className="bottom">
                <div className="card">
                  <button className="btn-cat">kids</button>
                  <img src="./images/kids2.jpg" alt="" className="first" />
                  <img src="./images/kids1.jpg" alt="" className="second" />
                </div>
              </div>
            </div>
            <div className="second">
              <div className="top">
                <div className="card">
                  <button className="btn-cat">mobile</button>
                  <img src="./images/mobile2.jpg" alt="" className="first" />
                  <img src="./images/mobile1.jpg" alt="" className="second" />
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="card">
                    <button className="btn-cat">laptop</button>
                    <img src="./images/laptop1.webp" alt="" className="first" />
                    <img src="./images/laptop2.jpg" alt="" className="second" />
                  </div>
                </div>
                <div className="right">
                  <div className="card">
                    <button className="btn-cat">camera</button>
                    <img src="./images/camera1.webp" alt="" className="first" />
                    <img src="./images/camera2.jpg" alt="" className="second" />
                  </div>
                </div>
              </div>
            </div>
            <div className="third">
              <div className="top">
                <div className="card">
                  <button className="btn-cat">shoes</button>
                  <img src="./images/shoes1.webp" alt="" className="first" />
                  <img src="./images/shoes2.jpg" alt="" className="second" />
                </div>
              </div>
              <div className="bottom">
                <div className="card">
                  <button className="btn-cat">beauty</button>
                  <img src="./images/beauty2.jpg" alt="" className="first" />
                  <img src="./images/beauty1.jpg" alt="" className="second" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Hero;
