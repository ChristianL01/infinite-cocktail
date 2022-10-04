import React from 'react';

function FindByLetter(props) {
	function handleClick() {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=')
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
                <input type="text" placeholder='Input a Letter' />
                <button type='submit'>Look For Margarita's</button>
            </form>
        </div>
    )
}

export default FindByLetter;
