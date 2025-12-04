import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main>
      <section class="login-section">
        <div class="container">
          <h1 class="login-title">Registro</h1>
          <div class="login-form-container">
            <form class="login-form" onSubmit={(e) => e.preventDefault()}>
              <div class="form-group">
                <label htmlFor="name">Nombre Completo:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div class="form-group">
                <label htmlFor="telf">Numero de Telefono:</label>
                <input type="text" id="telf" name="telf" />
              </div>
              <div class="form-group">
                <label htmlFor="email">Correo Electronico:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div class="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
              </div>
              <div class="login-form__actions">
                <button type="submit" class="btn btn--dark">Registrarse</button>
                <Link to="/login" class="btn btn--outline">¿Ya tienes cuenta?</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
