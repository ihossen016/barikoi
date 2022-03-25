import "./App.css";
import Search from "./components/Search";
import Maps from "./components/Maps";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState({});

  const getLocation = location => {
    setPlace(location);
  };

  console.log(place);

  return (
    <div className="App">
      <Search extractLocation={getLocation} />
      <Maps place={place} />
    </div>
  );
}

export default App;
