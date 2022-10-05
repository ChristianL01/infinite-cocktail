import React from 'react';
import {useState} from 'react'

function Homepage(props) {
	const [url, setUrl] = useState(
		'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	);
	function handleClick() {
		fetch(url)
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
