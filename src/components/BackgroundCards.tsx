import React from "react";
import { BackgroundCardsInfo } from "../interfaces/interfaces";
import "../scss/BackgroundCards.scss";

export const BackgroundCards: React.FC<BackgroundCardsInfo> = ({ pokemonInfo }) => {
  return (
    <div className="background-cards">
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
          <div className="background-card-front">
            <header>
              <h1></h1>
              <h6>{pokemonInfo?.weight}kg</h6>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};
