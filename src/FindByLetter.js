import React from 'react';
import { useState } from 'react'
import './CSS/Letter.css'
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

function FindByLetter(props) {
    const [letter, setLetter] = useState('');
    const [drinks1, setDrinks1] = useState('');
    const [drinks2, setDrinks2] = useState('');
    const [drinks3, setDrinks3] = useState('');
    const [drinks4, setDrinks4] = useState('');
    const [drinks5, setDrinks5] = useState('');
    const [drinkImg1, setDrinkImg1] = useState('');
    const [drinkImg2, setDrinkImg2] = useState('');
    const [drinkImg3, setDrinkImg3] = useState('');
    const [drinkImg4, setDrinkImg4] = useState('');
    const [drinkImg5, setDrinkImg5] = useState('');
    function onChange(e) {
        setLetter(e.target.value)
        // console.log(e.target.value)
    }
	function handleClick(e) {
        e.preventDefault()
		fetch(baseUrl + letter)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
                // console.log('success!', res);
                setDrinks1(res.drinks[0].strDrink)
                setDrinks2(res.drinks[1].strDrink);
                setDrinks3(res.drinks[2].strDrink);
                setDrinks4(res.drinks[3].strDrink);
                setDrinks5(res.drinks[4].strDrink);
                setDrinkImg1(res.drinks[0].strDrinkThumb);
                setDrinkImg2(res.drinks[1].strDrinkThumb);
                setDrinkImg3(res.drinks[2].strDrinkThumb);
                setDrinkImg4(res.drinks[3].strDrinkThumb);
                setDrinkImg5(res.drinks[4].strDrinkThumb);
			})
			.catch((err) => console.log('something went wrong...', err));
	}
    // console.log()
    // console.log(drinks1)
	return (
		<div className='letter-div'>
			<form className='letter-form' action=''>
				<input
					type='text'
					placeholder='Input a Letter'
					onChange={onChange}
					value={letter}
				/>
				<button className='letter-button' onClick={handleClick}>Look For Cocktails By Letter</button>
			</form>
			<div className='drinks-div'>
				<p className='letter-p'>
					{drinks1} <img className='letter-img' src={drinkImg1} alt='' />
				</p>
				<p className='letter-p'>
					{drinks2} <img className='letter-img' src={drinkImg2} alt='' />
				</p>
				<p className='letter-p'>
					{drinks3} <img className='letter-img' src={drinkImg3} alt='' />
				</p>
				<p className='letter-p'>
					{drinks4} <img className='letter-img' src={drinkImg4} alt='' />
				</p>
				<p className='letter-p'>
					{drinks5} <img className='letter-img' src={drinkImg5} alt='' />
				</p>
			</div>
		</div>
	);
}

export default FindByLetter;
