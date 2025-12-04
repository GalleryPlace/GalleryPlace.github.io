import React from 'react';

const ForgotPassword = () => {
  return (
    <main>
      <section class="login-section">
        <div class="container">
          <h1 class="login-title">Recuperar Contraseña</h1>
          <div class="login-form-container">
            <form class="login-form" onSubmit={(e) => e.preventDefault()}>
              <div class="form-group">
                <label htmlFor="email">Correo Electronico:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div class="login-form__actions">
                <button type="submit" class="btn btn--dark">Enviar correo de recuperacion</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
