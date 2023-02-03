import React, { useContext, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import MainContext from '../context/MainContext';
import Carousel from './Carousel';
import ButtonRecipeDetails from './ButtonRecipeDetails';
import LocalStorageContext from '../context/LocalStorageContext';
import notFavorited from '../images/whiteHeartIcon.svg';
import favorited from '../images/blackHeartIcon.svg';
import imgShare from '../images/shareIcon.svg';
import imgFav from '../images/favoriteIcon.svg';
import '../style/RecipeDetails.css';

function RecipeDetails() {
  const { functions } = useContext(LocalStorageContext);
  const { detailsFetch } = useContext(MainContext);
  const [isShared, setIsShared] = useState(false);

  const whiteHeart = <img src={ notFavorited } data-testid="favorite-btn" alt="share" />;
  const blackHeart = <img src={ favorited } data-testid="favorite-btn" alt="share" />;

  function getItens() {
    let entries = [];
    if (detailsFetch.dataValue.meals) {
      entries = Object.entries(detailsFetch.dataValue.meals[0]);
    }
    if (detailsFetch.dataValue.drinks) {
      entries = Object.entries(detailsFetch.dataValue.drinks[0]);
    }
    const ingredients = entries
      .filter((item) => item[0].includes('strIngredient'));
    const measures = entries
      .filter((item) => item[0].includes('strMeasure'));
    const combine = ingredients
      .map((item, index) => `${item[1]} ${measures[index][1]}`)
      .map((item) => item.replace('null', ''))
      .filter((item) => !item.includes('null'));

    return combine;
  }

  function handleClickShare() {
    navigator.clipboard.writeText(window.location.href);
    setIsShared(true);
  }
  console.log(detailsFetch)
  return (
    <div>
      {
        detailsFetch.dataValue.meals && detailsFetch.dataValue.meals.map((item) => (
          <div
            key={ item.strMeal }
            className="details-container"
          >
            <img
              data-testid="recipe-photo"
              className="img-header"
              src={ item.strMealThumb }
              alt={ item.strMeal }
            />
            <div className="recipe-name-container">
              <p className="recipe-name">{ item.strMeal }</p>
            </div>
            <div className="btn-container box">
              <div 
                className="btn"
                onClick={ handleClickShare }
                data-testid="share-btn"
                role="button"
              >
                <img src={ imgShare } alt="share"/>
              </div>
              <div
                className="btn"
                onClick={ () => functions.handleFavorite({
                  id: item.idMeal,
                  type: 'meal',
                  nationality: item.strArea,
                  category: item.strCategory,
                  alcoholicOrNot: '',
                  name: item.strMeal,
                  image: item.strMealThumb,
                }) }
              >
              <img
                src={ functions.isFavoriteRecipe(item.idMeal) ? favorited : notFavorited }
                alt="favorite"
              />
            </div>
          </div>
          {
            isShared && (
              <small className="shared font-epilogue">Link copied!</small>
            )
          }
            <h2 data-testid="recipe-title" hidden>{ item.strMeal }</h2>
            <h4 data-testid="recipe-category" hidden>{ item.strCategory }</h4>
            <div className="ingredients-container">
              <h2 className="details-heading">Ingredients</h2> 
              <div className="box ingredients">
                {
                  getItens().map((element, index) => (
                    <p
                      key={ `${element}${index}` }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { element }
                    </p>
                  ))
                }
              </div>
            </div>
            <div className="ingredients-container">
              <h2 className="details-heading">Instructions</h2>
              <div className="box ingredients">
                <p data-testid="instructions">{item.strInstructions}</p>
              </div>
            </div>
            <div className="video">
              <iframe
                className="video"
                data-testid="video"
                title={ item.strMeal }
                width="420"
                height="240"
                src={ item.strYoutube }
              />
            </div>
          </div>
        ))
      }
      {
        detailsFetch.dataValue.drinks && detailsFetch.dataValue.drinks.map((item) => (
          <div
            key={ item.strDrink }
            className="details-container"
          >
            <img
              data-testid="recipe-photo"
              className="img-header"
              src={ item.strDrinkThumb }
              alt={ item.strDrink }
            />
            <div className="recipe-name-container">
              <p className="recipe-name">{ item.strDrink }</p>
            </div>
            <div className="btn-container box">
              <div 
                className="btn"
                onClick={ handleClickShare }
                data-testid="share-btn"
                role="button"
              >
                <img src={ imgShare } alt="share"/>
              </div>
              <div
                className="btn"
                onClick={ () => functions.handleFavorite({
                  id: item.idDrink,
                  type: 'drink',
                  nationality: (item.strArea ? item.strArea : ''),
                  category: item.strCategory,
                  alcoholicOrNot: item.strAlcoholic,
                  name: item.strDrink,
                  image: item.strDrinkThumb,
                }) }
              >
              <img
                src={ functions.isFavoriteRecipe(item.idDrink) ? favorited : notFavorited }
                alt="favorite"
              />
              </div>
            </div>
            {
              isShared && (
                <small className="shared font-epilogue">Link copied!</small>
              )
            }
            <h2 data-testid="recipe-title">{ item.strDrink }</h2>
            <h4 data-testid="recipe-category">{ item.strAlcoholic }</h4>
            <div className="ingredients-container">
              <h2 className="details-heading">Ingredients</h2> 
              <div className="box ingredients">
                {
                  getItens().map((element, index) => (
                    <p
                      key={ `${element}${index}` }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { element }
                    </p>
                  ))
                }
              </div>
            </div>
            <div className="ingredients-container">
              <h2 className="details-heading">Instructions</h2>
              <div className="box ingredients">
                <p data-testid="instructions">{item.strInstructions}</p>
              </div>
            </div>
            <div className="video">
              <iframe
                className="video"
                data-testid="video"
                title={ item.strMeal }
                width="420"
                height="240"
                src={ item.strYoutube }
              />
            </div>
          </div>
        ))
      }
      <Carousel />
      <ButtonRecipeDetails />
    </div>
  );
}

export default RecipeDetails;
