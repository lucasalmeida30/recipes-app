import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/MainContext';
import RecipeDetails from '../components/RecipeDetails';

function DrinksDetails() {
  const { id } = useParams();
  const { fetchApi, detailsFetch } = useContext(MainContext);

  useEffect(() => {
    const fetchDetails = async () => {
      await detailsFetch.fetchApi(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      await fetchApi('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    };
    fetchDetails();
  }, []);

  return (
    <div>
      {
        detailsFetch.dataValue.drinks && <RecipeDetails />
      }
    </div>
  );
}

export default DrinksDetails;
