import { BackgroundCards } from "./BackgroundCards";
import "../scss/app.scss";
import { useMainCard } from "./MainCard";

function App() {
  const { render, extraPokemonInfo } = useMainCard();

  return (
    <div className="container">
      <div className="cards">
        <div className="card-display">{render}</div>

        <BackgroundCards extraPokemonInfo={extraPokemonInfo} />
      </div>
    </div>
  );
}

export default App;
