import "../scss/BackgroundCards.scss";

export const BackgroundCards = () => {
  const displayFront = () => {
    console.log("card clicked");
  };

  return (
    <div className="background-cards">
      {/* <div className="background-card">
        <div className="sidecard-front">
          <img src="../images/pokemon_card_back.png" alt="image" className="poke-image" />
        </div>
        <div className="card-back">testdbsahbdhusabvdhsavdksa</div>
      </div> */}

      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
      <div className="background-card">
        <div className="background-card-inner">
          <div className="background-card-front"></div>
          <div className="background-card-back">
            <img src="../src/images/pokemon_card_back.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
