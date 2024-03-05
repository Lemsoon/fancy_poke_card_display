import { BackgroundCards } from "./BackgroundCards";
import "../scss/app.scss";
import { useMainCard } from "./MainCard";

function App() {
  const { render, pokemonInfo } = useMainCard();

  return (
    <div className="container">
      <div className="cards">
        <div className="card-display">{render}</div>

        <BackgroundCards pokemonInfo={pokemonInfo} />
      </div>
    </div>
  );
}

export default App;
