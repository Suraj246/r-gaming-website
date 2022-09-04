import React from "react";
import TredingGames from "./GamesData/TredingGames";
import { NavLink, useNavigate } from "react-router-dom";

function GameContainerThird() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="collections">
        <div className="containerName">
          <h3>Treding Games</h3>
          <NavLink to="/games" className="seemore">
            See More
          </NavLink>
        </div>
        <div className="padding">
          {TredingGames.map((item) => {
            const { id, title, img, price, rating, link, geners } = item;
            return (
              <div className="item" key={id}>
                <img src={img} alt="" className="game-thumb" />
                <div className="itemInfo">
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--color)",
                    }}
                    onClick={() => {
                      navigate(link);
                    }}
                  >
                    <h4 className="gameName">{title}</h4>{" "}
                  </button>
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

export default GameContainerThird;
