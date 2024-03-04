import { BackgroundCards } from "./BackgroundCards";
import "../scss/app.scss";
import { MainCard } from "./MainCard";

function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card-display" id="current-card">
          <MainCard />
        </div>
        <BackgroundCards />
      </div>
    </div>
  );
}

export default App;
