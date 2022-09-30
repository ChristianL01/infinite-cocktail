import Nav from "./nav/Nav";
import './CSS/Style.css'
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div className="App">
    <h1 className="h1">Infinite Cocktail</h1>
    <nav><Nav /></nav>
    <body>
      <Homepage />
    </body>
    </div>
  );
}

export default App;
