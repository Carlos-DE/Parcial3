import { GetDirections } from '@/lib/database';
import React from 'react';

export function HomePage() {
  const styles = {
    homePage: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      color: '#333', /* Texto gris oscuro */
    },
    welcomeSection: {
      marginBottom: '20px',
    },
    featuredContent: {
      marginTop: '20px',
    },
    aboutUs: {
      marginTop: '20px',
    },
    contact: {
      marginTop: '20px',
    },
    title: {
      color: '#333',
    },
  };

 // const eventos = await GetDirections();
//
 // if(!eventos) {
 //   return <h1>No existe ningún evento</h1>;
 // }

 // const parsedAuctions = eventos.map(evento => evento.ToJSON());

  return (
    <div style={styles.homePage}>
      <section style={styles.welcomeSection}>
        <h1 style={styles.title}>Bienvenidos a Eventual</h1>
        <p>
          ¡¡Explora nuestro sitio para descubrir los eventos más interesantes!!
        </p>
      </section>

      <section style={styles.featuredContent}>
        <h2 style={styles.title}>Contenido Destacado</h2>
        <p>
          Descubre nuestras últimas novedades, eventos y características destacadas.
        </p>
        {/* Puedes agregar más contenido destacado aquí */}
      </section>
    </div>
  );
}

export default HomePage;
