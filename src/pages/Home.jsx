import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section class="hero">
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">Gallery Place</h1>
            <p class="hero__subtitle">¡Conoce nuestros productos para que decores tu casa, puesto de trabajo. Y al mismo tiempo inmortalices recuerdos y experiencias ¡Que todo el mundo lo vea!</p>
            <Link to="/nosotros" class="btn btn--dark btn--large">¿Quienes somos?</Link>
          </div>
          <div class="hero__image-container">
            <img src="/images/Inicio/1.png" alt="Pintura de un coche clásico rojo en una calle" class="hero__image" />
          </div>
        </div>
      </section>

      <section class="services">
        <div class="container">
          <h2 class="services__title">Nuestros servicios</h2>
          <div class="services__grid">
            <div class="card">
              <img src="/images/Inicio/2.jpeg" alt="Variedad de marcos de madera" class="card__image" />
              <div class="card__content">
                <h3 class="card__title">Marqueteria</h3>
                <p class="card__description">Descubre la variedad de marcos que tenemos para ti ¡Encuentra el que mejor se acomode a tus necesidades!</p>
              </div>
            </div>
            <div class="card">
              <img src="/images/Inicio/3.png" alt="Artista pintando un cuadro de girasoles" class="card__image" />
              <div class="card__content">
                <h3 class="card__title">Lienzos</h3>
                <p class="card__description">Solicita un cuadro personalizado o escoge uno ya hecho de nuestro catalogo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
