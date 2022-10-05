import Nav from "./nav/Nav";
import './CSS/Style.css'
import Homepage from "./Homepage/Homepage";
import { useState } from 'react'
import SearchByName from "./searchByName/SearchByName";
import FindByLetter from "./FindByLetter/FindByLetter";
function App() {
  return (
    <div className="App">
    <h1 className="h1">Infinite Cocktail</h1>
    <nav><Nav /></nav>
    <main>
      <Homepage />
      <SearchByName />
      <FindByLetter />
    </main>
    </div>
  );
}

export default App;
