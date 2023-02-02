import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import CategoryButtons from './CategoryButtons';
import '../style/Recipe.css';

function Recipes() {
  const { dataValue, filterFetch } = useContext(MainContext);
  const NUMBER12 = 12;
  return (
    <div className="recipe-main">
      <CategoryButtons />

      {(dataValue.meals && !filterFetch.dataValue.meals) && (
        dataValue.meals.slice(0, NUMBER12).map((meal, index) => {
          const { strMeal, strMealThumb, idMeal } = meal;
          return (
            <div className="container-recipe" key={ `${strMeal}${index}` }>
              <div
                className="card-recipe"
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/meals/${idMeal}` } className="link-title">
                  <img
                    className="img-recipe"
                    data-testid={ `${index}-card-img` }
                    src={ strMealThumb }
                    alt="meal"
                  />
                  <h2
                    className="title-recipe"
                    data-testid={ `${index}-card-name` }
                  >
                    {strMeal}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })
      ) }
      {(dataValue.meals && !!filterFetch.dataValue.meals) && (
        filterFetch.dataValue.meals.slice(0, NUMBER12).map((meal, index) => {
          const { strMeal, strMealThumb, idMeal } = meal;
          return (
            <div className="container-recipe" key={ `${strMeal}${index}` }>
              <div
                className="card-recipe"
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/meals/${idMeal}` }>
                  <img
                    className="img-recipe"
                    data-testid={ `${index}-card-img` }
                    src={ strMealThumb }
                    alt="meal"
                  />
                  <h2
                    className="title-recipe"
                    data-testid={ `${index}-card-name` }
                  >
                    {strMeal}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })
      ) }
      {(dataValue.drinks && !filterFetch.dataValue.drinks) && (
        dataValue.drinks.slice(0, NUMBER12).map((meal, index) => {
          const { strDrink, strDrinkThumb, idDrink } = meal;
          return (
            <div key={ `${strDrink}${index}` } data-testid={ `${index}-recipe-card` }>
              <Link to={ `/drinks/${idDrink}` }>
                <h2 data-testid={ `${index}-card-name` }>{strDrink}</h2>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strDrinkThumb }
                  alt="meal"
                />
              </Link>
            </div>
          );
        })
      ) }
      {(dataValue.drinks && !!filterFetch.dataValue.drinks) && (
        filterFetch.dataValue.drinks.slice(0, NUMBER12).map((meal, index) => {
          const { strDrink, strDrinkThumb, idDrink } = meal;
          return (
            <div key={ `${strDrink}${index}` } data-testid={ `${index}-recipe-card` }>
              <Link to={ `/drinks/${idDrink}` }>
                <h2 data-testid={ `${index}-card-name` }>{strDrink}</h2>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ strDrinkThumb }
                  alt="meal"
                />
              </Link>
            </div>
          );
        })
      ) }
    </div>
  );
}

export default Recipes;
