import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Lock, Home, Calendar } from 'lucide-react';

const Catalog = () => {
  return (
    <main>
      <section class="hero-catalogo">
        <div class="hero-catalogo__content">
          <h1 class="hero-catalogo__title">Catálogo</h1>
          <p class="hero-catalogo__subtitle">Encuentra lo que buscas...</p>
        </div>
      </section>

      <section class="catalogo-section">
        <div class="container">
          <div class="filter-container">
            <div class="filter-card">
              <img src="/images/Catalogo/1.png" alt="Filtro de lienzos" class="filter-card__image" />
              <div class="filter-card__content">
                <h3 class="filter-card__title">Filtrar por lienzos</h3>
                <p class="filter-card__description">Aqui solo encontraras las mejores y mas hermosas pinturas.</p>
                <Link to="#" class="btn btn--dark btn--small">Ir</Link>
              </div>
            </div>
            <div class="filter-card">
              <img src="/images/Catalogo/2.jpeg" alt="Filtro de marcos" class="filter-card__image" />
              <div class="filter-card__content">
                <h3 class="filter-card__title">Filtrar por marcos</h3>
                <p class="filter-card__description">Explora en nuestra variedad de marcos el que es perfecto para ti.</p>
                <Link to="#" class="btn btn--dark btn--small">Ir</Link>
              </div>
            </div>
          </div>

          <h2 class="catalogo-section__title">Nuestro catálogo</h2>
          <div class="product-grid">
            <Link to="#" class="product-card-link">
              <div class="product-card">
                <img src="/images/Catalogo/3.jpeg" alt="Frutinis colombianinis" class="product-card__image" />
                <div class="product-card__content">
                  <h3 class="product-card__title">Frutinis colombianinis</h3>
                  <p class="product-card__description">Un grupo de frutas a punto de ser desayunadas.</p>
                  <p class="product-card__price">$75.000 COP</p>
                </div>
              </div>
            </Link>
            <Link to="/producto" class="product-card-link">
              <div class="product-card">
                <img src="/images/Catalogo/4.jpeg" alt="El hombre sonriente" class="product-card__image" />
                <div class="product-card__content">
                  <h3 class="product-card__title">El hombre sonriente</h3>
                  <p class="product-card__description">Que contagiosa es su sonrisa no?</p>
                  <p class="product-card__price">$50.000 COP</p>
                </div>
              </div>
            </Link>
            <Link to="#" class="product-card-link">
              <div class="product-card">
                <img src="/images/Catalogo/5.jpeg" alt="Ramo de flores primaverales" class="product-card__image" />
                <div class="product-card__content">
                  <h3 class="product-card__title">Ramo de flores primaverales</h3>
                  <p class="product-card__description">Un hermoso jarron lleno de rosas.</p>
                  <p class="product-card__price">$100.000 COP</p>
                </div>
              </div>
            </Link>
          </div>
          <div class="catalogo-section__actions">
            <Link to="#" class="btn btn--dark btn--small">Ver más</Link>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            <div class="feature-item">
              <Globe className="feature-item__icon" />
              <div class="feature-item__content">
                <h4 class="feature-item__title">Pagos 100% seguros</h4>
                <p class="feature-item__description">Tus transacciones están protegidas con métodos de pago confiables y certificados.</p>
              </div>
            </div>
            <div class="feature-item">
              <Lock className="feature-item__icon" />
              <div class="feature-item__content">
                <h4 class="feature-item__title">Envío protegido</h4>
                <p class="feature-item__description">Cada pedido se empaca cuidadosamente para garantizar que llegue en perfectas condiciones.</p>
              </div>
            </div>
            <div class="feature-item">
              <Home className="feature-item__icon" />
              <div class="feature-item__content">
                <h4 class="feature-item__title">Envío hasta tu hogar</h4>
                <p class="feature-item__description">Recibe tus productos directamente en la puerta de tu casa, sin complicaciones.</p>
              </div>
            </div>
            <div class="feature-item">
              <Calendar className="feature-item__icon" />
              <div class="feature-item__content">
                <h4 class="feature-item__title">Envíos locales o nacionales</h4>
                <p class="feature-item__description">Realizamos entregas en tu ciudad y también a nivel nacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
