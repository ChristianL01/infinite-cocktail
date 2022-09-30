import React from 'react';

function Homepage({ url }) {
	const randUrl = { url } + '/random.php';
	function handleClick() {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log('success!', res);
			})
			.catch((err) => console.log('something went wrong...', err));
	}
	return (
		<div>
			<button onClick={handleClick}>Find Random Cocktail</button>
		</div>
	);
}

export default Homepage;
