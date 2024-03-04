import "../scss/BackgroundCards.scss";

export const BackgroundCards = () => {
  const displayFront = () => {
    console.log("card clicked");
  };

  return (
    <div className="background-cards">
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
      <div className="background-card" onClick={displayFront}>
        <img src="src\images\pokemon_card_back.png" alt="image" className="poke-image" />
      </div>
    </div>
  );
};
