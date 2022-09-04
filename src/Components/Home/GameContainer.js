import React, { useState } from "react";
import "./Home.css";
import GameData from "./GamesData/ActionGames";

import { Link } from "react-router-dom";

const GameContainer = () => {
  const [items, setItems] = useState(GameData);

  return (
    <>
      <div className="collections">
        <div className="containerName">
          <h3>Action Games</h3>
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
    </>
  );
};

export default GameContainer;
