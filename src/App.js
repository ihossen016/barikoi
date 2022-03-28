import "./App.css";
import Search from "./components/Search";
import Maps from "./components/Maps";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState({});

  // Getting Location Data from Search Component
  const getLocation = location => {
    setPlace(location);
  };

  return (
    <div className="App">
      <Search extractLocation={getLocation} />
      <Maps place={place} />
    </div>
  );
}

export default App;
