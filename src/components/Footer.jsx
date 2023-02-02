import { Link } from 'react-router-dom';
import imgDrink from '../images/drinkIcon.svg';
import imgMeal from '../images/mealIcon.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <footer
      className="footer-container"
      data-testid="footer"
    >
      <div>
        <Link to="/drinks">
          <img
            data-testid="drinks-bottom-btn"
            src={ imgDrink }
            alt="ToDrink"
          />
        </Link>
      </div>
      <div>
        <Link to="/meals">
          <img
            data-testid="meals-bottom-btn"
            src={ imgMeal }
            alt="ToMeal"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
