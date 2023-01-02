import './CSS/App.css';
import Homepage from './Homepage';
import SearchByName from './SearchByName';
import FindByLetter from './FindByLetter';
import AppRouter from './AppRouter';
import './CSS/Reset.css';
function App() {
	return (
		<div className='App'>
			<nav>
				<ul className='app-nav'>
					<li>
						<a href='http://localhost:3000/random'> Random </a>
					</li>
					<li>
						<a href='http://localhost:3000/findbyletter'>Find By Letter</a>
					</li>
					<li>
						<a href="http://localhost:3000/searchbyname">Search By Name</a>
					</li>
				</ul>
				<AppRouter />
			</nav>
			<h1 className='h1'>Infinite Cocktail</h1>
			<main>
				<div className='homepage'>
					<Homepage />
				</div>
				<div className='search-by-name'>
					<SearchByName />
				</div>
				<div className='find-by-letter'>
					<FindByLetter />
				</div>
			</main>
		</div>
	);
}

export default App;
