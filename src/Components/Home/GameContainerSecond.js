import React, { useState } from "react";
import MindGameData from "./GamesData/MIndGameData";
import { Link } from "react-router-dom";

function GameContainerSecond() {
  const [items, setItems] = useState(MindGameData);

  return (
    <div>
      <div className="collections">
        <div className="containerName">
          <h3>Mind Games</h3>
          <Link to="/games" className="seemore">
            See More
          </Link>
        </div>
        <div className="padding">
          {items.map((item) => {
            const { id, title, img, price, rating, geners } = item;
            return (
              <div className="item" key={id}>
                <img src={img} alt="" className="game-thumb" />
                <div className="itemInfo">
                  <h4 className="gameName">{title}</h4>
                  <h4 className="gameName">{geners}</h4>
                  <div className="gameRating">
                    <i className="bx bx-star ratingStar"></i>
                    <i className="bx bx-star ratingStar"></i>
                    <i className="bx bx-star ratingStar"></i>
                    <i className="bx bx-star ratingStar"></i>
                    <i className="bx bx-star ratingStar"></i>
                    <span className="ratingNum">{rating}</span>
                  </div>
                  <h3 className="gamePrice">{price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameContainerSecond;
