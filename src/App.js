import "./App.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div id="glass-card">
        <div className="dashboard">
          <h1 className="date" id="current-date"></h1>
          <p className="time">
            Last Updated: <span id="current-time"></span>
          </p>
          <h2 className="location">
            Currently in <span id="current-city"></span>
          </h2>
        </div>
        <Search />
      </div>
      {/* FOOTER */}
      <div className="footer">
        <footer>
          Another Weather App{" "}
          <a
            href="https://github.com/MDias04/another-weather-app"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Open-sourced on GitHub{" "}
          </a>
          by{" "}
          <a
            href="https://mdias4.myportfolio.com/"
            target="_blank"
            rel="noreferrer"
            className="my-card"
          >
            Marta Dias
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
