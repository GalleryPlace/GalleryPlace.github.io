import React from 'react';

const AboutUs = () => {
  return (
    <main>
      <section class="about-us-section">
        <div class="container">
          <div class="about-us__layout">
            <div class="about-us__content">
              <h1 class="about-us__title">Sobre nosotros</h1>
              <p class="about-us__description">¡Qué tal! En Gallery Place, somos fans del arte y queremos que tú también te unas. Tenemos lienzos de todos los tamaños y para todos los gustos, ¡así que no importa si eres un artista experimentado o si apenas estás empezando! Y para que tus obras queden increíbles, ¡también tenemos una gran variedad de pinturas de alta calidad y colores vibrantes! Encuentra todo lo que necesitas para darle vida a tus ideas, desde el lienzo perfecto hasta los colores más chidos. Y si quieres darle un toque único y con estilo a tu espacio, echa un vistazo a nuestra colección de marquetería. ¡Tenemos diseños increíbles que seguro te encantarán! En Gallery Place, te damos todo lo que necesitas para que tu creatividad vuele alto. ¡Explora, inspírate y crea con nosotros!</p>
            </div>
            <div class="about-us__image-container">
              <img src="/images/nosotros/pintura_example.jpeg" alt="Pintura de una niña" class="about-us__image" />
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section">
        <div class="container">
          <h2 class="contact-section__title">¿Quieres ayuda?</h2>
          <form class="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div class="contact-form__grid">
              <div class="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="..." />
              </div>
              <div class="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido" placeholder="..." />
              </div>
            </div>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="..." />
            </div>
            <div class="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="4" placeholder="..."></textarea>
            </div>
            <button type="submit" class="btn btn--dark">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
