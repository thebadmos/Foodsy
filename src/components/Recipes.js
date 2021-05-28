import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Alert from './Alert';
import Recipe from './Recipe';

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = 'a661d4a1';
  const APP_KEY = '25c97e316d8b9f33c556f83a655e934e';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('No food with such name');
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery('');
      setAlert('');
    } else {
      setAlert('Please fill the form');
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <div className="container">
        <h1>
          <div id="first">
            a recipe
            <br /> has no soul, <br />
            <div id="textFont">you as the cook</div>
            must bring
            <br /> soul
            <br /> to the recipe
          </div>
        </h1>
      </div>

      <div classNameName="wrapper">
        <form onSubmit={onSubmit} className="search-form">
          {alert !== '' && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food..."
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
