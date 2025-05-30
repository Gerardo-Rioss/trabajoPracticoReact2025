import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductList";
import styles from "./App.module.css";
import { NavHeader } from "./components/Header/NavHeader/NavHeader";
// TIPADOS DE DATOS
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
//LISTADOS DE EJEMPLOS SEPARADOS POR TITULO
const electronicosPopulares: Response = {
  mostViews: {
    titleProductList: "Electrónicos más buscados",
    posts: [
      {
        id: 101,
        name: "Smartphone Samsung Galaxy S23",
        description:
          "Teléfono inteligente con cámara de 108MP, 256GB almacenamiento, 8GB RAM",
        price: 899,
        image:
          "https://multipoint.com.ar/Image/0/750_750-[global-version]-sm-s911_galaxys23_front_lavender_221122.jpg",
      },
      {
        id: 102,
        name: "Laptop HP Pavilion 15",
        description:
          "Laptop con procesador Intel Core i7, 16GB RAM, SSD 512GB, pantalla Full HD",
        price: 749,
        image:
          "https://pccenter.com.ar/cdn/shop/files/FotosTivbbendaOnline@2x.jpg?v=1723493700",
      },
      {
        id: 103,
        name: "Auriculares Sony WH-1000XM5",
        description:
          "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería",
        price: 349,
        image:
          "https://assets.entrepreneur.com/content/3x2/2000/1717744762-Sonyheadphonescolors.jpg",
      },
      {
        id: 104,
        name: "Smartwatch Apple Watch Series 8",
        description:
          "Reloj inteligente con monitor de frecuencia cardíaca y oxígeno en sangre",
        price: 399,
        image:
          "https://itechstore.com.ar/1564-large_default/apple-watch-series-8-41mm-midnight-sport-band-m-l.jpg",
      },
      {
        id: 105,
        name: "Tablet Amazon Fire HD 10",
        description: "Tablet de 10.1 pulgadas, 32GB, con Alexa integrada",
        price: 149,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_632481-MLA44172464184_112020-O.webp",
      },
      {
        id: 106,
        name: "Dron DJI Mavic 3",
        description: "Dron profesional con cámara Hasselblad 4K",
        price: 1599,
        image:
          "https://images.bidcom.com.ar/resize?src=https://static.bidcom.com.ar/publicacionesML/productos/DRDJI034/1000x1000-DRDJI034.jpg&w=800&q=100",
      },
      {
        id: 107,
        name: "Monitor LG UltraWide",
        description: "Monitor 34 pulgadas 1440p curvado",
        price: 499,
        image:
          "https://http2.mlstatic.com/D_685318-MLA54921513210_042023-O.jpg",
      },
      {
        id: 108,
        name: "Altavoz JBL PartyBox",
        description: "Altavoz portátil con luces LED",
        price: 299,
        image:
          "https://oportunidades-vip.com.ar/wp-content/uploads/2024/12/Parlante_Portatil_Inalambrico_Bluetooth_Luces_Led_Gts-1360_D_774381-MLA81040854894_122024-O-1200x1200.jpg",
      },
    ],
  },
};
const hogarCocina: Response = {
  mostViews: {
    titleProductList: "Productos para el hogar",
    posts: [
      {
        id: 201,
        name: "Robot aspirador Xiaomi Mi Robot",
        description:
          "Aspiradora inteligente con navegación láser y control por app",
        price: 299,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbTHqpJhK2AofK3BgcOy4JKskUxij964MzQ&s",
      },
      {
        id: 202,
        name: "Juego de sábanas algodón egipcio",
        description: "Juego de 4 piezas, 600 hilos, tamaño queen, color blanco",
        price: 89,
        image:
          "https://acdn-us.mitiendanube.com/stores/004/961/185/products/whatsapp-image-2024-09-23-at-14-53-25-cc35f389dcb313461817271145134952-1024-1024.jpeg",
      },
      {
        id: 203,
        name: "Olla instantánea Duo Crisp",
        description:
          "Olla a presión eléctrica 8 en 1 con función de aire frito",
        price: 159,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_600515-MLA84033144575_042025-O.webp",
      },
      {
        id: 204,
        name: "Set de cuchillos profesionales",
        description:
          "Set de 6 cuchillos de acero inoxidable con bloque de madera",
        price: 129,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk02vyqXKxTdMYoBGQigfKQGXABHigaytnXw&s",
      },
      {
        id: 205,
        name: "Lámpara de pie LED",
        description:
          "Lámpara regulable con control remoto y 16 colores diferentes",
        price: 59,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_679906-MLA47090756111_082021-O.webp",
      },
      {
        id: 206,
        name: "Purificador de aire Dyson",
        description: "Purificador con filtro HEPA y control por app",
        price: 549,
        image:
          "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/it/cooking/2021/AEM-TP09-overview-hero-cooking-v3.jpg?$responsive$&cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640",
      },
      {
        id: 207,
        name: "Cafetera Nespresso Vertuo",
        description: "Cafetera con cápsulas y espumador de leche",
        price: 179,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_729221-MLA82640614721_022025-O.webp",
      },
      {
        id: 208,
        name: "Batidora KitchenAid",
        description: "Batidora profesional 5.5L con 10 velocidades",
        price: 429,
        image:
          "https://kaidarg.vtexassets.com/arquivos/ids/155737/image-eb561391e134465ea9f20f6562f2a8f0.jpg?v=638388840193600000",
      },
    ],
  },
};
const deporteAireLibre: Response = {
  mostViews: {
    titleProductList: "Equipamiento deportivo",
    posts: [
      {
        id: 301,
        name: "Bicicleta montaña Trek Marlin 5",
        description:
          "Bicicleta de montaña con cuadro de aluminio y 21 velocidades",
        price: 649,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpHsu8uFkLcMqRE4iWJ3OBWgVr29lJ2Fn7Q&s",
      },
      {
        id: 302,
        name: "Zapatillas running Nike Air Zoom",
        description:
          "Zapatillas para running con amortiguación Zoom Air y suela de goma",
        price: 129,
        image:
          "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-nike-air-zoom-pegasus-40-negra-510010dv3853001-1_1.jpg",
      },
      {
        id: 303,
        name: "Tienda de campaña Coleman",
        description: "Tienda para 4 personas, impermeable, fácil de armar",
        price: 149,
        image:
          "https://m.media-amazon.com/images/I/51N9HzKaKhL._AC_SL1347_.jpg",
      },
      {
        id: 304,
        name: "Mancuernas ajustables",
        description: "Set de 2 mancuernas ajustables de 5-25kg cada una",
        price: 199,
        image:
          "https://m.media-amazon.com/images/I/71mD9tv7h5L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 305,
        name: "Reloj deportivo Garmin Forerunner",
        description:
          "Reloj GPS para running con monitor de frecuencia cardíaca",
        price: 249,
        image: "https://garmin.com.ar/Image/0/750_750-1161.jpg",
      },
      {
        id: 306,
        name: "Raqueta de tenis Wilson",
        description: "Raqueta profesional Pro Staff",
        price: 229,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BjtstLS8zTx3EzoldUw9b4SGj4mpFAtoig&s",
      },
      {
        id: 307,
        name: "Pelota de fútbol Adidas",
        description: "Pelota oficial Champions League",
        price: 129,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6slZjZEemOiXzBa0I2qYNxy4BZHf6SnsXveXe3A1kDx8L83Oe_hRYgtw6fA6AjVbZS8&usqp=CAU",
      },
      {
        id: 308,
        name: "Mesa de ping pong",
        description: "Mesa regulable para interior/exterior",
        price: 399,
        image:
          "https://acdn-us.mitiendanube.com/stores/001/338/668/products/mesa-ping-pong-tb2000-1-6d12663565056d2dc817147531483923-1024-1024.jpg",
      },
    ],
  },
};
const destacadosMes: Response = {
  mostViews: {
    titleProductList: "Productos Destacados del Mes",
    posts: [
      {
        id: 701,
        name: "Cámara Sony Alpha A7 IV",
        description: "Cámara mirrorless full frame 33MP con 4K/60p",
        price: 2499,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-deZY7IRdXKJIwrf9om7qHt4FkvNAOi_epg&s",
      },
      {
        id: 702,
        name: "Bicicleta Eléctrica Trek",
        description: "Bicicleta urbana con motor 250W y autonomía 70km",
        price: 2899,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_649715-MLA79230444117_092024-O.webp",
      },
      {
        id: 703,
        name: "Mochila The North Face",
        description: "Mochila resistente al agua 30L con portátil",
        price: 129,
        image:
          "https://cdn-images.farfetch-contents.com/25/13/93/12/25139312_55242724_1000.jpg",
      },
      {
        id: 704,
        name: "Consola PlayStation 5",
        description: "Edición estándar con lector Blu-Ray 825GB",
        price: 499,
        image:
          "https://arsonyb2c.vtexassets.com/arquivos/ids/366581/Imagen-01_2000-x-2000-px.jpg.jpg?v=638826154074330000",
      },
      {
        id: 705,
        name: "Smart TV LG OLED 65''",
        description: "TV 4K HDR con Dolby Vision y WebOS",
        price: 1799,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2PIWIwzDw-8U08xFOSRvSjcInaFeKUqHBA&s",
      },
      {
        id: 706,
        name: "Cafetera Breville Barista",
        description: "Máquina espresso con molinillo integrado",
        price: 699,
        image:
          "https://cronicasfreelancer.com/wp-content/uploads/2023/04/sage-barista-express.jpg",
      },
      {
        id: 707,
        name: "Reloj Casio G-Shock",
        description: "Resistente a golpes, agua 200m y solar",
        price: 199,
        image:
          "https://zonazero.com.ar/cdn/shop/files/gwg-1000-1a_seq1.jpg?v=1721085371",
      },
    ],
  },
};
// UNIDOS TODOS LOS LISTADOS EN UN SOLO ARREGLO PARA PODER RECORRERLOS PARA OBTENER UN CODIGO MAS LIMPIO
const fullList: Response[] = [
  electronicosPopulares,
  hogarCocina,
  deporteAireLibre,
  destacadosMes,
];
function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <NavHeader />
        </div>
        <div className={styles.mainContent}>
          {fullList.map(({ mostViews }, index) => {
            return (
              <ProductList key={index} title={mostViews.titleProductList}>
                {mostViews.posts.map((post) => {
                  return (
                    <ProductCard
                      key={post.id}
                      id={post.id}
                      name={post.name}
                      description={post.description}
                      price={post.price}
                      image={post.image}
                    />
                  );
                })}
              </ProductList>
            );
          })}
          
        </div>
        <div className={styles.sideNav}></div>
        <div className={styles.footer}>
          <div className={styles.text}>
          <h3>Trabajo Práctico - Rios Gerardo</h3></div>
          </div>
          
      </div>
    </>
  );
}
export default App;
