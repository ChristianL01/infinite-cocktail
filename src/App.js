import Nav from "./nav/Nav";
import './CSS/Style.css'
import Homepage from "./Homepage/Homepage";
import { useState } from 'react'
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
function App() {
const [url , setUrl] = useState(baseUrl)
  return (
    <div className="App">
    <h1 className="h1">Infinite Cocktail</h1>
    <nav><Nav /></nav>
    <main>
      <Homepage url={url} />
    </main>
    </div>
  );
}

export default App;
