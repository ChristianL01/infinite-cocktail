import './CSS/App.css';
import AppRouter from './AppRouter';
import './CSS/Reset.css';
function App() {
	return (
		<div className='App'>
			<main>
				<div className='h1-div'>
					<h1 className='infinite'>Infinite</h1>
					<h1 className='cocktail'>Cocktail</h1>
				</div>
				<div className='border'></div>
				<nav>
					<ul className='app-nav'>
						<li>
							<a href='http://localhost:3000/random' id='nav-button'>
								{' '}
								Random{' '}
							</a>
						</li>
						<li>
							<a href='http://localhost:3000/findbyletter' id='nav-button'>
								Find By Letter
							</a>
						</li>
						<li>
							<a href='http://localhost:3000/searchbyname' id='nav-button'>
								Search By Name
							</a>
						</li>
					</ul>
				</nav>
				<AppRouter />
			</main>
		</div>
	);
}

export default App;
