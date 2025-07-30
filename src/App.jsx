import { useState } from "react";
import "./App.css";
import ShowDetails from "./components/ShowDetails";
import ShowSelection from "./components/ShowSelection";
import showsData from "./shows/data.js";

 function App() {
  const [shows] = useState(showsData);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}

export default App;
