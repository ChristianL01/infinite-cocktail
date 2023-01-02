import React from 'react';
import { useState } from 'react';
import './CSS/Random.css';

function Homepage(props) {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
	const [drinkName, setDrinkName] = useState('');
	const [drinkImg, setDrinkImg] = useState('');
	const [ingredient1, setIngredient1] = useState('');
	const [ingredient2, setIngredient2] = useState('');
	const [ingredient3, setIngredient3] = useState('');
	const [ingredient4, setIngredient4] = useState('');
	const [ingredient5, setIngredient5] = useState('');
	const [ingredient6, setIngredient6] = useState('');
	const [ingredient7, setIngredient7] = useState('');
	const [ingredient8, setIngredient8] = useState('');
	const [instructions, setInstructions] = useState('');
	const [show, setShow] = useState(false);
	function handleClick() {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setDrinkName(res.drinks[0].strDrink);
				setDrinkImg(res.drinks[0].strDrinkThumb);
				setIngredient1(res.drinks[0].strIngredient1);
				setIngredient2(res.drinks[0].strIngredient2);
				setIngredient3(res.drinks[0].strIngredient3);
				setIngredient4(res.drinks[0].strIngredient4);
				setIngredient5(res.drinks[0].strIngredient5);
				setIngredient6(res.drinks[0].strIngredient6);
				setIngredient7(res.drinks[0].strIngredient7);
				setIngredient8(res.drinks[0].strIngredient8);
				setInstructions(res.drinks[0].strInstructions);
				console.log(res.drinks[0]);
				setShow(true);
			})
			.catch((err) => console.log('something went wrong...', err));
	}
	return (
		<div className='random-div'>
			<h1 className='random-h1'>{drinkName}</h1>
			{show && <img id='drink-img' src={drinkImg} alt='' />}
			{show && <h2 className='ingredients-header'>INGREDIENTS</h2>}
			<p className='random-p'>{ingredient1}</p>
			<p className='random-p'>{ingredient2}</p>
			<p className='random-p'>{ingredient3}</p>
			<p className='random-p'>{ingredient4}</p>
			<p className='random-p'>{ingredient5}</p>
			<p className='random-p'>{ingredient6}</p>
			<p className='random-p'>{ingredient7}</p>
			<p className='random-p'>{ingredient8}</p>
			{show && <h2 className='instructions-header'>INSTRUCTIONS</h2>}
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
