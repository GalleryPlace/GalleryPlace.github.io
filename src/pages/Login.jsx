import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main>
      <section class="login-section">
        <div class="container">
          <h1 class="login-title">Iniciar Sesion</h1>
          <div class="login-form-container">
            <form class="login-form" onSubmit={(e) => e.preventDefault()}>
              <div class="form-group">
                <label htmlFor="email">Correo Electronico:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div class="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
              </div>
              <div class="login-form__actions">
                <button type="submit" class="btn btn--dark">Iniciar Sesion</button>
                <Link to="/registro" class="btn btn--outline">¿Aun no tienes cuenta?</Link>
              </div>
              <Link to="/recuperar-password" class="login-form__forgot-password">Olvide mi contraseña</Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
