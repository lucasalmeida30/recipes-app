import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import imgPlate from '../images/plateIcon.svg';
import imgCow from '../images/cowIcon.svg';
import imgGoat from '../images/goatIcon.svg';
import imgChicken from '../images/chickenIcon.svg';
import imgBreakfast from '../images/breakfastIcon.svg';
import imgDessert from '../images/dessertIcon.svg';
import imgOrdinary from '../images/ordinaryIcon.svg';
import imgCocktail from '../images/cocktailIcon.svg';
import imgShake from '../images/shakeIcon.svg';
import imgOther from '../images/otherIcon.svg';
import imgCocoa from '../images/cocoaIcon.svg';
import '../style/Category.css';

const MEALS_ICONS = [imgCow, imgGoat, imgChicken, imgBreakfast, imgDessert];
const DRINKS_ICONS = [imgOrdinary, imgCocktail, imgShake, imgOther, imgCocoa];

function CategoryButtons() {
  const { categoryFetch, filterFetch } = useContext(MainContext);
  const [cat, setCat] = useState('');
  const { dataValue } = categoryFetch;
  const NUMBER5 = 5;
  const URLMEAL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const URLDRINK = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  function toggleFilterMeal(category, url) {
    if (cat === category) {
      filterFetch.setDataValue([]);
      setCat('');
    } else {
      filterFetch.fetchApiFiltered(`${url}${category}`);
      setCat(category);
    }
  }

  return (
    <div className="category-container">
      <div
        className="category-btn"
        onClick={ () => filterFetch.setDataValue([]) }
        role="button"
      >
      <img
        className="options-img"
        src={ imgPlate }
        alt="type"
      />
        <Link
          className="link-text"
          data-testid="All-category-filter"
          onClick={ () => filterFetch.setDataValue([]) }
        >
          All
        </Link>
      </div>
      {dataValue.meals && (
        dataValue.meals.slice(0, NUMBER5).map((meal, index) => {
          const { strCategory } = meal;
          return (
            <div
              key={ `${strCategory}${index}` }
              className="category-btn"
              onClick={ () => toggleFilterMeal(strCategory, URLMEAL) }
              role="button"
            >
              <img
                className="options-img"
                src={ MEALS_ICONS[index] }
                alt="options"
              />
              <Link
                className="link-text"
                data-testid={ `${strCategory}-category-filter` }
                onClick={
                  () => toggleFilterMeal(strCategory, URLMEAL)
                }
              >
                {strCategory}
              </Link>
            </div>
          );
        })
      ) }
      {dataValue.drinks && (
        dataValue.drinks.slice(0, NUMBER5).map((drinks, index) => {
          const { strCategory } = drinks;
          return (
            <div
              key={ `${strCategory}${index}` }
              className="category-btn taller"
              onClick={ () => toggleFilterMeal(strCategory, URLDRINK) }
              role="button"
            >
              <img
                className="options-img"
                src={ DRINKS_ICONS[index] }
                alt="options"
              />
              <Link
                className="link-text"
                data-testid={ `${strCategory}-category-filter` }
                onClick={
                  () => toggleFilterMeal(strCategory, URLDRINK)
                }
              >
                {strCategory}
              </Link>
            </div>
          );
        })
      ) }
    </div>
  );
}

export default CategoryButtons;
