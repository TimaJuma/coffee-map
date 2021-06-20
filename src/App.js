import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        Local coffeeShops{" "}
        <span role="img" aria-label="cofee">
          ☕
        </span>
      </h1>
      <Map />
    </>
  );
}

export default App;
