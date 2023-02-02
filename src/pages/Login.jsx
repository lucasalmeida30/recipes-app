import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import '../style/Login.css';

function Login() {
  const {
    emailInput, passwordInput, isButtonDisabled, handleClick,
  } = useContext(LoginContext);

  return (
    <div className="container-login">
      <div className="main-login">
        <div className="card-login">
          <h2>LOGIN</h2>
          <input
            className="input-email-login"
            data-testid="email-input"
            type="email"
            placeholder="Email"
            value={ emailInput.value }
            onChange={ emailInput.handleChange }
          />

          <input
            className="input-password-login"
            data-testid="password-input"
            type="password"
            placeholder="Password"
            value={ passwordInput.value }
            onChange={ passwordInput.handleChange }
          />

          <button
            className="button-login"
            data-testid="login-submit-btn"
            type="button"
            disabled={ isButtonDisabled() }
            onClick={ handleClick }
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
