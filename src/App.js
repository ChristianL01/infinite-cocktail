import './CSS/App.css';
import Homepage from './Homepage';
import { useState } from 'react';
import SearchByName from './SearchByName';
import FindByLetter from './FindByLetter';
import './CSS/Reset.css';
function App() {
	return (
		<div className='App'>
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
