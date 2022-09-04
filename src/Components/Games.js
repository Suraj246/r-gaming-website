import React, { useState } from "react";
import GameData from "./Home/GamesData/ActionGames";
import MindGameData from "./Home/GamesData/MIndGameData";
import TredingGames from "./Home/GamesData/TredingGames";

function Games() {
  const all = [...GameData, ...MindGameData, ...TredingGames];
  const [data, setData] = useState(all);
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((elem) => {
          const { id, img, title, rating, geners, price } = elem;
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
    </>
  );
}

export default Games;
