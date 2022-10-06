import React from 'react';
import { useState } from 'react';
import './CSS/Name.css';

function SearchByName(props) {
	const url = useState(
		'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
	);
	console.log(url);
	const [name, setName] = useState('');
	const [drinkName, setDrinkName] = useState('');
	const [drinkImg, setDrinkImg] = useState('');
	const [drinkInstruc, setDrinkInstruc] = useState('');

	function handleChange(e) {
		setName(e.target.value);
	}
	function handleClick(e) {
		e.preventDefault()
		fetch(url + name)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// console.log('success!', res);
				setDrink(res.drinks[0]);
				setDrinkName(res.drinks[0].strDrink);
				setDrinkImg(res.drinks[0].strDrinkThumb);
				setDrinkInstruc(res.drinks[0].strInstructions);
				setIsShown(true);
			})
			.catch((err) => console.log('something went wrong...', err));
	}
	// console.log(drink);
	return (
		<div>
			<form className='name-form' action=''>
				<input
					className='name-input'
					onChange={handleChange}
					value={name}
					type='text'
					placeholder='Cocktail Name'
				/>
				<button className='name-button' onClick={handleClick}>
					Look Up Cocktail By Name
				</button>
			</form>
			<div>
				<h1 className='name-h1'>{drinkName}</h1>
				<img className='drink-img' src={drinkImg} alt='' />
				<p className='name-p'>{drinkInstruc}</p>
			</div>
		</div>
	);
}

export default SearchByName;
