import { useEffect, useState } from "react";
import { InitialInfo, MainInfo } from "../interfaces/interfaces";
import { ImageFrame } from "./ImageFrame";
import "../scss/MainCard.scss";
import axios from "axios";

export const MainCard = () => {
  const [pokemonLinks, setPokemonLinks] = useState<string[]>();
  const [pokemonInfo, setPokemonInfo] = useState<MainInfo>();

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
    const getThisPokeInfo = async () => {
      if (!pokemonLinks) {
        console.error("Links are not ready");
        return;
      }

      const resp = await axios.get<MainInfo>(pokemonLinks[Math.floor(Math.random() * 1302)]);
      setPokemonInfo(resp.data);
    };
    getThisPokeInfo();
  }, [pokemonLinks]);
  //   console.log(pokemonInfo);

  return (
    <div className="card-front">
      <header className="card-header">
        <h1>{pokemonInfo?.species.name}</h1>
        <h2>weight: {pokemonInfo?.weight}</h2>
      </header>
      <main>
        <ImageFrame pokemonImage={pokemonInfo?.sprites.front_default} pokemon={pokemonInfo?.species.name} />
      </main>
    </div>
  );
};
