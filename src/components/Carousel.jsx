import React, { useContext } from 'react';
import Slider from 'react-slick';
import MainContext from '../context/MainContext';
import '../style/Carousel.css';

const FIVE_POSITIONS_ARRAY = [0, 1, 2, 3, 4];

export default function Carousel() {
  const { carouselFetch } = useContext(MainContext);
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    carouselFetch.dataValue.drinks ? (
      <Slider { ...settings }>
        {
          FIVE_POSITIONS_ARRAY.map((__item, index) => (
            <div className="card-container card">
              <img
                className="card-image"
                src={ carouselFetch.dataValue.drinks[index].strDrinkThumb }
                alt="drink"  
              />
              <h3
                data-testid={ `${index}-recommendation-title` }
                className="font-epilogue card-footer"
              >
                { carouselFetch.dataValue.drinks[index].strDrink}
              </h3>
            </div>
          ))
        }
      </Slider>
    ) : carouselFetch.dataValue.meals && (
      <Slider { ...settings }>
        {
          FIVE_POSITIONS_ARRAY.map((__item, index) => (
            <div className="card-container card">
              <img
                className="card-image"
                src={ carouselFetch.dataValue.meals[index].strMealThumb }
                alt="meals"  
              />
              <h3
                data-testid={ `${index}-recommendation-title` }
                className="font-epilogue card-footer"
              >
                { carouselFetch.dataValue.meals[index].strMeal}
              </h3>
            </div>
          ))
        }
      </Slider>
    )
  );
}
