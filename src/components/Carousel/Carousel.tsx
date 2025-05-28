import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tipos de datos
interface Post {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Response {
  mostViews: {
    titleProductList: string;
    decriptionProductList?: string;
    posts: Post[];
  };
}

// Datos de ejemplo
const electronicosPopulares: Response = {
  mostViews: {
    titleProductList: "Electrónicos más buscados",
    posts: [
      {
        id: 101,
        name: "Smartphone Samsung Galaxy S23",
        description: "Teléfono inteligente con cámara de 108MP, 256GB almacenamiento, 8GB RAM",
        price: 899,
        image: "https://multipoint.com.ar/Image/0/750_750-[global-version]-sm-s911_galaxys23_front_lavender_221122.jpg"
      },
      {
        id: 102,
        name: "Laptop HP Pavilion 15",
        description: "Laptop con procesador Intel Core i7, 16GB RAM, SSD 512GB, pantalla Full HD",
        price: 749,
        image: "https://pccenter.com.ar/cdn/shop/files/FotosTivbbendaOnline@2x.jpg?v=1723493700"
      },
      {
        id: 103,
        name: "Auriculares Sony WH-1000XM5",
        description: "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería",
        price: 349,
        image: "https://assets.entrepreneur.com/content/3x2/2000/1717744762-Sonyheadphonescolors.jpg"
      },
      {
        id: 104,
        name: "Smartwatch Apple Watch Series 8",
        description: "Reloj inteligente con monitor de frecuencia cardíaca y oxígeno en sangre",
        price: 399,
        image: "https://itechstore.com.ar/1564-large_default/apple-watch-series-8-41mm-midnight-sport-band-m-l.jpg"
      },
      {
        id: 105,
        name: "Tablet Amazon Fire HD 10",
        description: "Tablet de 10.1 pulgadas, 32GB, con Alexa integrada",
        price: 149,
        image: "https://http2.mlstatic.com/D_NQ_NP_632481-MLA44172464184_112020-O.webp"
      },
      {
        id: 106,
        name: "Dron DJI Mavic 3",
        description: "Dron profesional con cámara Hasselblad 4K",
        price: 1599,
        image: "https://images.bidcom.com.ar/resize?src=https://static.bidcom.com.ar/publicacionesML/productos/DRDJI034/1000x1000-DRDJI034.jpg&w=800&q=100"
      },
      {
        id: 107,
        name: "Monitor LG UltraWide",
        description: "Monitor 34 pulgadas 1440p curvado",
        price: 499,
        image: "https://http2.mlstatic.com/D_685318-MLA54921513210_042023-O.jpg"
      },
      {
        id: 108,
        name: "Altavoz JBL PartyBox",
        description: "Altavoz portátil con luces LED",
        price: 299,
        image: "https://oportunidades-vip.com.ar/wp-content/uploads/2024/12/Parlante_Portatil_Inalambrico_Bluetooth_Luces_Led_Gts-1360_D_774381-MLA81040854894_122024-O-1200x1200.jpg"
      }
    ]
  }
};

// Props para las flechas
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.prev}`}
    onClick={onClick}
    aria-label="Anterior"
    type="button"
  >
    ‹
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.next}`}
    onClick={onClick}
    aria-label="Siguiente"
    type="button"
  >
    ›
  </button>
);

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Nuestros Productos</h2>
      <Slider {...settings}>
        {electronicosPopulares.mostViews.posts.map((post) => (
          <div key={post.id} className={styles.slide}>
            <div className={styles.card}>
              <img
                src={post.image}
                alt={post.name}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{post.name}</h3>
              <p className={styles.cardPrice}>${post.price}</p>
              <button className={styles.button}>Comprar</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
