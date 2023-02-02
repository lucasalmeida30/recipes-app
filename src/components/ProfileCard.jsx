import { useHistory } from 'react-router-dom';
import imgChecked from '../images/checkedIcon.svg';
import imgFavorites from '../images/favoriteIcon.svg';
import imgLogout from '../images/logoutIcon.svg';
import '../style/Profile.css'

function ProfileCard() {
  const history = useHistory();
  const handleLogoutButton = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <body className="profile-container">
      {
        localStorage.getItem('user') && (
          <h3
            className="user-email-container"
            data-testid="profile-email"
          >
            { JSON.parse(localStorage.getItem('user')).email }
          </h3>
        )
      }
      <div
        className="box profile-box"
          onClick={ () => history.push('/done-recipes') }
          role="card"
        >
        <img
          src={ imgChecked }
          alt="imgChecked"
          className="yellow-icon"
        />
        <button
          className="profile-btns button is-white"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
          >
          Done Recipes
        </button>
      </div>
      <div
        className="box profile-box"
          onClick={ () => history.push('/favorite-recipes') }
          role="card"
        >
        <img
          src={ imgFavorites }
          alt="imgFavorites"
          className="yellow-icon"
        />
        <button
          className="profile-btns button is-white"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
          >
          Favorite Recipes
        </button>
      </div>
      <div
        className="box profile-box"
          onClick={ handleLogoutButton }
          role="card"
        >
        <img
          src={ imgLogout }
          alt="imgLogout"
          className="yellow-icon"
        />
        <button
          className="profile-btns button is-white"
          data-testid="profile-logout-btn"
          onClick={ handleLogoutButton }
          >
          Logout
        </button>
      </div>
    </body>
  );
}

export default ProfileCard;
