import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <main>
      <section class="product-detail-section">
        <div class="container">
          <div class="product-detail__layout">
            <div class="product-detail__image-container">
              <img src="/images/Producto/Producto.jpeg" alt="Pintura 'El mejor amigo del hombre'" class="product-detail__image" />
            </div>
            <div class="product-detail__info">
              <h1 class="product-detail__title">El mejor amigo del hombre</h1>
              <p class="product-detail__subheading">Lienzo 60x50, marco de madera de roble</p>
              <p class="product-detail__price">$200.000 COP</p>
              <p class="product-detail__description">El autor quiso reflejar en esta obra el apego que tiene el perro al ser humano, y esto se comprueba como verdadero al estar el perro junto al hombre simplemente sin hacer nada. Ninguno de los dos, pocos o ningún animal que no sea el perro, estaría dispuesto a sentarse al lado de un humano solo porque sí, y menos aún junto a un arma.</p>
              <Link to="#" class="btn btn--dark">Añadir al carrito</Link>
            </div>
          </div>
        </div>
      </section>

      <section class="comments-section">
        <div class="container">
          <div class="comments-section__header">
            <h2 class="comments-section__title">Comentarios</h2>
            <Link to="#" class="comments-section__add-new">+ Añadir nuevo comentario</Link>
          </div>
          <div class="comments-grid">
            <div class="comment-card">
              <p class="comment-card__text">Me encanto, tiempo de envio exelente</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/Fero.jpg" alt="Avatar de Juan Fernando H" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Juan Fernando H</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
            <div class="comment-card">
              <p class="comment-card__text">Fantastico</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/Samu.png" alt="Avatar de Samuel Rodriguez" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Samuel Rodriguez</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
            <div class="comment-card">
              <p class="comment-card__text">“A genuinely glowing review”</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/Martin.jpeg" alt="Avatar de Martin Urrego" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Martin Urrego</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
            <div class="comment-card">
              <p class="comment-card__text">“A terrific piece of praise”</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/vale.png" alt="Avatar de Valentina Berrio" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Valentina Berrio</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
            <div class="comment-card">
              <p class="comment-card__text">Fabuloso, ideal para un regalo</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/Jero.png" alt="Avatar de Luis Urrego" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Luis Urrego</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
            <div class="comment-card">
              <p class="comment-card__text">Perfecto para mi sala</p>
              <div class="comment-card__author">
                <img src="/images/Producto/Users/Fox.png" alt="Avatar de Martin Julian Z" class="comment-card__avatar" />
                <div class="comment-card__author-info">
                  <span class="comment-card__author-name">Martin Julian Z</span>
                  <Link to="#" class="comment-card__reply">Responder</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="related-products-section">
        <div class="container">
          <h2 class="related-products-section__title">Productos relacionados</h2>
          <div class="product-grid">
            <div class="product-card">
              <img src="/images/Producto/1.jpeg" alt="Frutinis colombianinis" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__title">Frutinis colombianinis</h3>
                <p class="product-card__price">$75.000 COP</p>
              </div>
            </div>
            <div class="product-card">
              <img src="/images/Producto/2.jpeg" alt="Soy mi propio altar" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__title">Soy mi propio altar</h3>
                <p class="product-card__price">$10.000 COP</p>
              </div>
            </div>
            <div class="product-card">
              <img src="/images/Producto/3.jpeg" alt="Ultima cena" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__title">Ultima cena</h3>
                <p class="product-card__price">$40.000 COP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
