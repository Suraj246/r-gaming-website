import React, { useState } from "react";
import "./Home.css";
import GameContainer from "./GameContainer";
import GameContainerSecond from "./GameContainerSecond";
import GameContainerThird from "./GameContainerThird";
import About from "../About/About";
import Contact from "../Footer/Contact";
import StreamContainer from "./StreamContainer";
// import { useNavigate } from "react-router-dom";

function Home() {
  const [current, setCurrent] = useState(0);
  // const navigate = useNavigate();
  const SliderImg = [
    {
      id: 1,
      image: "Images/video1.mp4",
    },
    {
      id: 2,
      image: "Images/video2.mp4",
    },
    {
      id: 3,
      image: "Images/video3.mp4",
    },
  ];
  const slideNext = () => {
    setCurrent(current === SliderImg.length - 1 ? 0 : current + 1);
  };
  console.log(current);
  const slidePrev = () => {
    setCurrent(current === 0 ? SliderImg.length - 1 : current - 1);
  };
  const goToIndex = (slideIndex) => {
    setCurrent(slideIndex);
  };
  return (
    <>
      <div className="imgContainer">
        {SliderImg.map((slider, index) => {
          return (
            <div key={slider.id}>
              <div className={index === current ? "slide active" : "slide"}>
                {index === current && (
                  <>
                    <video
                      src={slider.image}
                      loop
                      autoPlay
                      className="imgs"
                    ></video>
                  </>
                )}
              </div>
              {/* <div className="dowload">
                  <NavLink to="" className="h2">download</NavLink>
                </div> */}
            </div>
          );
        })}
      </div>
      <div className="arrowContainer">
        <i className="bx bx-chevron-left left-arrow" onClick={slidePrev}></i>
        <i className="bx bx-chevron-right right-arrow" onClick={slideNext}></i>
      </div>
      {/* <div className="dowload" >
          {SliderImg.map((n,index)=>{
            const {go,name} = n
            return(
              <div>
                <button key={index} onClick={() => {
                      navigate(go);
                    }} className="h2">Download </button>
              </div>
            )
          })}
         </div> */}
      <div className="dot-container">
        {SliderImg.map((slide, slideIndex) => {
          return (
            <i
              key={slideIndex}
              className="bx bx-circle dot"
              onClick={() => goToIndex(slideIndex)}
            ></i>
          );
        })}
      </div>

      <section>
        <GameContainerThird />
        <GameContainer />
        <GameContainerSecond />
        <StreamContainer />
        <About />
        <Contact />
      </section>
    </>
  );
}

export default Home;
