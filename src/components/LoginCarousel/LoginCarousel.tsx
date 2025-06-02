import './LoginCarousel.css';

const LoginCarousel = () => {
  return (
    <section 
      className="LoginCarouselSect"
      style={{
        backgroundImage: 'linear-gradient(to bottom,rgba(36, 36, 32, 0.12),rgba(36, 36, 32, 0.4)), url("https://dlgreen.mx/wp-content/uploads/2024/02/iluminacion-biodinamica.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="carousel-track">
        <div className="carousel-slide">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="image-group" key={index}>
              <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Carrusel.png" alt="Carrusel1" />
              <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Carrusel2.png" alt="Carrusel2" />
              <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Carrusel3.png" alt="Carrusel3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoginCarousel;