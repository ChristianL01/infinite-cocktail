import React from 'react';
import { useState } from 'react';
import './CSS/Random.css';

function Homepage(props) {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
	const [drinkName, setDrinkName] = useState('');
	const [drinkImg, setDrinkImg] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState('');
	function handleClick() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setDrinkName(res.drinks[0].strDrink);
				setDrinkImg(res.drinks[0].strDrinkThumb);
				setIngredients(res.drinks[0].strIngredient1);
				setInstructions(res.drinks[0].strInstructions);
			})
			.catch((err) => console.log('something went wrong...', err));
	}
	return (
		<div>
			<h1 className='random-h1'>{drinkName}</h1>
			<img className='drink-img' src={drinkImg} alt='' />
			<p className='random-p'>{ingredients}</p>
			<p className='random-p'>{instructions}</p>
			<div className='button-div'>
				<button className='rand-button' onClick={handleClick}>
					Find Random Cocktail
				</button>
			</div>
		</div>
	);
}

export default Homepage;
