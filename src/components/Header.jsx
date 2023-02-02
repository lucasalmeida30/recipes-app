import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import imgProfile from '../images/profileIcon.svg';
import imgSearch from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../style/Header.css';

function Header() {
  const [inputDisabled, setInputDisabled] = useState(false);
  const history = useHistory();
  const { pathname } = history.location;

  function handleTitle() {
    switch (pathname) {
    case '/meals':
      return 'Meals';
    case '/drinks':
      return 'Drinks';
    case '/done-recipes':
      return 'Done Recipes';
    case '/favorite-recipes':
      return 'Favorite Recipes';
    default:
      return 'Profile';
    }
  }

  return (
    <div className="container-header">
      <div className="main-header">
        <div className="title-recipes">
          <h4>Recipes</h4>
          <h6>app</h6>
        </div>
        <Link to="/profile">
          <img
            className="img-profile"
            src={ imgProfile }
            alt="profile"
            data-testid="profile-top-btn"
          />
        </Link>

        {
          (pathname === '/meals' || pathname === '/drinks') && (
            <Link onClick={ () => setInputDisabled(!inputDisabled) }>
              <img
                className="img-search"
                src={ imgSearch }
                alt="search"
                data-testid="search-top-btn"
              />
            </Link>
          )
        }

      </div>
      <div className="search-header">
        <h1 className="title-header" data-testid="page-title">{handleTitle()}</h1>
        {
          inputDisabled && <SearchBar />
        }
      </div>
    </div>
  );
}

export default Header;
