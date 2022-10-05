import React from 'react';
import { useState } from 'react';

function SearchByName(props) {
	const [url, setUrl] = useState(
		'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
	);
    console.log(url)
	const [name, setName] = useState('');
	function handleChange(e) {
		setName(e.target.value);
		console.log(e.target.value);
	}
	function handleClick() {
		fetch(url + name)
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
			<label htmlFor=''>Cocktail Name</label>
			<input
				className='name-input'
				onChange={handleChange}
				value={name}
				type='text'
				placeholder='Cocktail Name'
			/>
			<button onClick={handleClick}>Look Up Cocktail By Name</button>
		</div>
	);
}

export default SearchByName;
