import React from "react";
import { BackgroundCardsInfo } from "../interfaces/interfaces";
import "../scss/BackgroundCards.scss";

export const BackgroundCards: React.FC<BackgroundCardsInfo> = ({ extraPokemonInfo }) => {
  console.log("Extra info: ", extraPokemonInfo);
  if (extraPokemonInfo) {
    return (
      <div className="background-cards">
        {extraPokemonInfo.map((pokemon: any, index) => {
          return (
            <div key={index} className="background-card">
              <div className="background-card-inner">
                <div className="background-card-back">
                  <img src="../src/images/pokemon_card_back.png" alt="" />
                </div>
                <div className="background-card-front">
                  <header>
                    <h1>{pokemon.species.name}</h1>
                  </header>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
{
  /* 
  <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
          <div className="background-card-front">
            <header>
              <h1></h1>
              <h6>{extraPokemonInfo.data.weight}kg</h6>
            </header>
          </div>
        </div>
      </div> 
      */
}
