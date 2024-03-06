import { useEffect, useState } from "react";
import { InitialInfo, MainInfo } from "../interfaces/interfaces";
import "../scss/MainCard.scss";
import axios from "axios";

export const useMainCard = () => {
  const [pokemonLinks, setPokemonLinks] = useState<string[]>();
  const [pokemonInfo, setPokemonInfo] = useState<MainInfo>();
  const [extraPokemonInfo, setExtraPokemonInfo] = useState<MainInfo | any>();
  const [currentPokemonAbilitiyURL, setCurrentPokemonAbilitiyURL] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await axios.get<InitialInfo>("https://pokeapi.co/api/v2/pokemon?limit=2000").then((resp) =>
        resp.data.results.map((pokemon: any) => {
          return pokemon.url;
        })
      );
      setPokemonLinks(resp);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    if (!pokemonLinks) {
      console.error("Links are not ready");
      return;
    }
    const getThisPokeInfo = async () => {
      const resp = await axios.get<MainInfo>(pokemonLinks[Math.floor(Math.random() * 1302)]);
      console.log(resp.data);
      setPokemonInfo(resp.data);
      getExtraPokemonInfo();
    };
    getThisPokeInfo();

    //There is a 0.98% chance to get a duplicate card. Low enough chance for me to not care to make it impossible
    const getExtraPokemonInfo = async () => {
      const reqs = [];
      for (let i = 0; i < 12; i++) {
        reqs.push(axios.get(pokemonLinks[Math.floor(Math.random() * 1302)]).then((response) => response.data));
      }
      //axios.all initiates all api calls from reqs array at the same time.
      const resp = await axios.all(reqs);
      setExtraPokemonInfo(resp);
    };
  }, [pokemonLinks]);

  return {
    extraPokemonInfo,
    render: (
      <article className="pokemon-card">
        <div className="pokemon-card-inner">
          <div className="pokemon-card-front">
            <header className="card-header">
              <p className="pokemon-name">{pokemonInfo?.species.name}</p>
              <p className="hp-display">
                HP <span className="base-hp">{pokemonInfo?.stats[0].base_stat}</span>
              </p>
            </header>
            <div className="image-container">
              <img
                src={pokemonInfo?.sprites.other.home.front_default}
                alt={pokemonInfo?.species.name}
                className="pokemon-image"
              />
            </div>
            <div className="abilities-type">
              <div className="abilities-display">
                <p className="abilities-title">Abilities</p>
                <ul className="abilities-list">
                  {pokemonInfo?.abilities.map((abilityInfo: { ability: { name: string } }) => {
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
                  {pokemonInfo?.types.map((type: { type: { name: string } }, index: number) => {
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
          <div className="pokemon-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" className="card-back" />
          </div>
        </div>
      </article>
    ),
  };
};
