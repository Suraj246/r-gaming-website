import React, { useState } from "react";
// import GameContainer from "../Home/GameContainer";
import "./FirstGame.css";
import GameContainerThird from "../Home/GameContainerThird";

import { NavLink } from "react-router-dom";

function FirstGame() {
  const [current, setCurrent] = useState(0);

  const SliderImg = [
    {
      id: 1,
      img: "Images/slide1.jpg",
    },
    {
      id: 2,
      img: "Images/thumb7.jpg",
    },
    {
      id: 3,
      img: "Images/slide3.jpg",
    },
  ];

  const slideNext = () => {
    setCurrent(current === SliderImg.length - 1 ? 0 : current + 1);
  };
  console.log(current);
  const slidePrev = () => {
    setCurrent(current === 0 ? SliderImg.length - 1 : current - 1);
  };

  return (
    <section>
      <div id="first">
        <div className="imgContainer1">
          {SliderImg.map((slider, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slider.img}
                    alt="game image"
                    className="pubgImage"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="arrowContent">
          <i class="bx bx-chevron-left l-arrow" onClick={slidePrev}></i>
          <i class="bx bx-chevron-right r-arrow" onClick={slideNext}></i>
        </div>
      </div>
      <div className="game_info">
        <div className="game_About">
          <h2 style={{ fontSize: "1.6rem", paddingBottom: "10px" }}>
            about game
          </h2>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            vitae voluptatibus vel reiciendis autem fuga suscipit, deserunt
            sequi unde nemo maiores officiis illo. Illum unde error dolorum
            similique quam earum eum, tenetur expedita dolore, eaque at maxime,
            quidem voluptatem ducimus nisi fuga! Facilis repellendus possimus ea
            impedit consectetur modi consequatur, sunt natus, laborum harum
            cupiditate laboriosam. Iste numquam fugiat cum vitae adipisci
            officiis? Ratione, quisquam, quam numquam perspiciatis saepe iure
            optio odio quis cum sed aliquam vel aut non natus officia quasi
            fugiat? Laudantium, cum sint? Architecto, tempora perferendis quae
            blanditiis dicta qui est atque rerum repellat quis, illum optio.
          </h4>
        </div>
        <div className="gameVersion">
          <h3>Game Version</h3>
          <p>Version : 5.36.2</p>
          <p>Last Updated: 34 july 3234</p>
          <p>downloaded: 364653</p>
          <h3>Requirements: </h3>
          <p>windows 10 or above</p>
          <p>grapics card 9 or higher</p>
          <NavLink to="" className="downloadgame" download>
            Download
          </NavLink>
        </div>
      </div>

      <div style={{}}>
        <GameContainerThird />
      </div>
    </section>
  );
}

export default FirstGame;
