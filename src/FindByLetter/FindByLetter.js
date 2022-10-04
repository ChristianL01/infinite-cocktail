import React from 'react';
import { useState } from 'react'
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

function FindByLetter(props) {
    const [letter, setLetter] = useState('')
    function onChange(e) {
        const letter = setLetter(e.target.value)
    }
	function handleClick(e) {
        e.preventDefault()
		fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
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
            <form action="">
                <input type="text" placeholder='Input a Letter' onChange={onChange} value={letter} />
                <button onClick={handleClick}>Look For Cocktails By Letter</button>
            </form>
        </div>
    )
}

export default FindByLetter;
