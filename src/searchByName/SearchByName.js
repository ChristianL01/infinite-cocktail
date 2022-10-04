import React from 'react';

function SearchByName(props) {
    function handleClick() {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
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
            <label htmlFor="">Margarita Name</label>
            <input type="text" placeholder='Margarita Name' />
            <button type='submit'>Look Up Margarita</button>
        </div>
    );
}

export default SearchByName;