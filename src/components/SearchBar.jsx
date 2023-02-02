import { useContext } from 'react';
import MainContext from '../context/MainContext';

function SearchBar() {
  const {
    searchInput, radioInput, handleClickSearch,
  } = useContext(MainContext);

  return (
    <div>
      <div>
        <input
          className="search-input"
          data-testid="search-input"
          type="text"
          placeholder="Search"
          value={ searchInput.value }
          onChange={ searchInput.handleChange }
        />
      </div>
      <div className="search-bar">
        <div className="container-radio">
          <label htmlFor="ingredient" className="inputs-radio">
            <input
              data-testid="ingredient-search-radio"
              name="search-radio"
              id="ingredient"
              value="ingredient"
              type="radio"
              onChange={ radioInput.handleChange }
            />
            Ingredient
          </label>
          <label htmlFor="name" className="inputs-radio">
            <input
              data-testid="name-search-radio"
              name="search-radio"
              id="name"
              value="name"
              type="radio"
              onChange={ radioInput.handleChange }
            />
            Name
          </label>
          <label htmlFor="first-letter" className="inputs-radio">
            <input
              data-testid="first-letter-search-radio"
              name="search-radio"
              id="first-letter"
              value="first-letter"
              type="radio"
              onChange={ radioInput.handleChange }
            />
            First Letter
          </label>
        </div>
        <div>
          <button
            className="button-search"
            data-testid="exec-search-btn"
            type="button"
            onClick={ handleClickSearch }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
