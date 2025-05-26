import { NavBar } from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductList";
import styles from "./App.module.css";

type Post = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Response = {
  mostViews: {
    titleProductList: string;
    decriptionProductList?: string;
    posts: Post[];
  };
};

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
      }
    ]
  }
};

const hogarCocina: Response = {
  mostViews: {
    titleProductList: "Productos para el hogar",
    posts: [
      {
        id: 201,
        name: "Robot aspirador Xiaomi Mi Robot",
        description: "Aspiradora inteligente con navegación láser y control por app",
        price: 299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbTHqpJhK2AofK3BgcOy4JKskUxij964MzQ&s"
      },
      {
        id: 202,
        name: "Juego de sábanas algodón egipcio",
        description: "Juego de 4 piezas, 600 hilos, tamaño queen, color blanco",
        price: 89,
        image: "https://acdn-us.mitiendanube.com/stores/004/961/185/products/whatsapp-image-2024-09-23-at-14-53-25-cc35f389dcb313461817271145134952-1024-1024.jpeg"
      },
      {
        id: 203,
        name: "Olla instantánea Duo Crisp",
        description: "Olla a presión eléctrica 8 en 1 con función de aire frito",
        price: 159,
        image: "https://http2.mlstatic.com/D_NQ_NP_600515-MLA84033144575_042025-O.webp"
      },
      {
        id: 204,
        name: "Set de cuchillos profesionales",
        description: "Set de 6 cuchillos de acero inoxidable con bloque de madera",
        price: 129,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk02vyqXKxTdMYoBGQigfKQGXABHigaytnXw&s"
      },
      {
        id: 205,
        name: "Lámpara de pie LED",
        description: "Lámpara regulable con control remoto y 16 colores diferentes",
        price: 59,
        image: "https://http2.mlstatic.com/D_NQ_NP_679906-MLA47090756111_082021-O.webp"
      }
    ]
  }
};

const deporteAireLibre: Response = {
  mostViews: {
    titleProductList: "Equipamiento deportivo",
    posts: [
      {
        id: 301,
        name: "Bicicleta montaña Trek Marlin 5",
        description: "Bicicleta de montaña con cuadro de aluminio y 21 velocidades",
        price: 649,
        image: "https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin5_22_35085_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"
      },
      {
        id: 302,
        name: "Zapatillas running Nike Air Zoom",
        description: "Zapatillas para running con amortiguación Zoom Air y suela de goma",
        price: 129,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3a1f5b9e-3c1a-4a7b-9b9e-9f9b9e9f9b9e/air-zoom-pegasus-39-running-shoes-2zXJQZ.png"
      },
      {
        id: 303,
        name: "Tienda de campaña Coleman",
        description: "Tienda para 4 personas, impermeable, fácil de armar",
        price: 149,
        image: "https://www.coleman.com/dw/image/v2/BBGZ_PRD/on/demandware.static/-/Sites-master-catalog-coleman/default/dw4a1f1d1f/images/large/2000021185_C.jpg"
      },
      {
        id: 304,
        name: "Mancuernas ajustables",
        description: "Set de 2 mancuernas ajustables de 5-25kg cada una",
        price: 199,
        image: "https://m.media-amazon.com/images/I/71Z+7eYy1BL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 305,
        name: "Reloj deportivo Garmin Forerunner",
        description: "Reloj GPS para running con monitor de frecuencia cardíaca",
        price: 249,
        image: "https://www.garmin.com/es-ES/p/739416/pn/010-02572-10"
      }
    ]
  }
};


function App() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <ProductList title={electronicosPopulares.mostViews.titleProductList}>
          {electronicosPopulares.mostViews.posts.map((post)=>{
            return(
            <ProductCard 
            id={post.id} 
            name={post.name} 
            description={post.description} 
            price={post.price} 
            image={post.image} 
            />
            )
          })}
        </ProductList>
        <ProductList title={hogarCocina.mostViews.titleProductList}>
          {hogarCocina.mostViews.posts.map((post)=>{
            return(
            <ProductCard 
            id={post.id} 
            name={post.name} 
            description={post.description} 
            price={post.price} 
            image={post.image} 
            />
            )
          })}
        </ProductList>
        <ProductList title={deporteAireLibre.mostViews.titleProductList}>
          {deporteAireLibre.mostViews.posts.map((post)=>{
            return(
            <ProductCard 
            id={post.id} 
            name={post.name} 
            description={post.description} 
            price={post.price} 
            image={post.image} 
            />
            )
          })}
        </ProductList>
      </div>
    </>
  );
}

export default App;
