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
                  <header className="card-header">
                    <p className="pokemon-name">{pokemon.species.name}</p>
                    <p className="hp-display">
                      HP <span className="base-hp">{pokemon.stats[0].base_stat}</span>
                    </p>
                  </header>
                  <div className="image-container">
                    <img
                      src={pokemon.sprites.other.home.front_default}
                      alt={pokemon.species.name}
                      className="pokemon-image"
                    />
                  </div>
                  <div className="abilities-type">
                    <div className="abilities-display">
                      <p className="abilities-title">Abilities</p>
                      <ul className="abilities-list">
                        {pokemon.abilities.map((abilityInfo: { ability: { name: string } }) => {
                          return (
                            <li key={abilityInfo.ability.name} className="ability-list-item">
                              {abilityInfo.ability.name}
                              <p></p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="type-display">
                      <p className="type-title">Type</p>
                      <ul className="type-list">
                        {pokemon.types.map((type: { type: { name: string } }, index: number) => {
                          return (
                            <li key={index} className="type-list-item">
                              {type.type.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
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
