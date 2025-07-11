import styles from "./App.module.css";
import { NavHeader } from "./components/Header/headerContent/headerContent";
import { FooterContent } from "./components/Footer/FooterContent";
import MainContent from "./components/Main/MainContent";
import { useState } from "react";
import SideBarContent from "./components/SideBar/SideBarContent";

// TIPADOS DE DATOS
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
type ProductList = {
  title: string;
  decription?: string;
  products: Product[];
};

function App() {
  //Estado para el carrito
  const [cart, setCart] = useState<Product[]>([]);
  //Estado del buscador
  const [search, setSearch] = useState("");
  //Estado de las categorias
  const [selectedCategory, setSelectedCategory] = useState("");
  //estado de los filtros por precio
  const [priceFilter, setPriceFilter] = useState("");

  const categories = [
    "Electrónica",
    "Audio",
    "Wearables",
    "Fotografía y Video",
    "Informática",
    "Limpieza",
    "Dormitorio",
    "Cocina",
    "Iluminación",
    "Climatización",
    "Café y Bebidas",
    "Electrodomésticos de cocina",
    "Ciclismo",
    "Calzado deportivo",
    "Camping",
    "Entrenamiento",
    "Tenis",
    "Fútbol",
    "Juegos de mesa",
    "Movilidad Eléctrica",
    "Accesorios",
    "Gaming",
  ];

  // Verificar si el producto ya esta en el carrito
  const isInCart = (id: number) => {
    return cart.some((p) => p.id === id);
  };

  //agregar producto al carrito
  const addToCart = (p: Product) => {
    if (!isInCart(p.id)) {
      setCart([...cart, p]);
    }
  };

  //Remover producto del carrito
  const removeFromCart = (id: number) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  // sumar el precio de todos los productos agregados en el carrito
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  //Filrar listado por la busqueda, categoria o precio
  const filteredList = fullList
    .map((list) => ({
      ...list,
      products: list.products.filter((product) => {
        //filtra por nombre
        const filteredByName = product.name
          .toLowerCase()
          .includes(search.toLowerCase());
        //filtra por cageoria
        const filteredByCategory =
          selectedCategory === "" || product.category === selectedCategory;
        //filtra segun radio buttom seleccionado en el rango de precio
        let filteredByPrice = true;
        if (priceFilter === "Hasta $500") filteredByPrice = product.price < 500;
        else if (priceFilter === "$500 a $1.000")
          filteredByPrice = product.price >= 500 && product.price <= 1000;
        else if (priceFilter === "Mas de $1.000")
          filteredByPrice = product.price > 1000;
        // retorna la lista filtrada
        return filteredByName && filteredByCategory && filteredByPrice;
      }),
    }))
    .filter((list) => list.products.length > 0);
  console.log(fullList);

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <NavHeader total={total} setSearch={setSearch} search={search} />
        </div>
        <div className={styles.mainContent}>
          <MainContent
            lists={filteredList}
            isInCart={isInCart}
            add={addToCart}
            remove={removeFromCart}
          />
        </div>
        <div className={styles.sideBar}>
          <SideBarContent
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>
        <div className={styles.footer}>
          <FooterContent />
        </div>
      </div>
    </>
  );
}
export default App;

///////////////////////////////////   LISTADOS DE PRODUCTOS PARA UTILIZAR AL INSTANCIAR LOS COMPONENTES   ///////////////////////////////////////
const fullList: ProductList[] = [
  {
    title: "Electrónicos más buscados",
    products: [
      {
        id: 101,
        name: "Smartphone Samsung Galaxy S23",
        description:
          "Teléfono inteligente con cámara de 108MP, 256GB almacenamiento, 8GB RAM",
        price: 899,
        image:
          "https://multipoint.com.ar/Image/0/750_750-[global-version]-sm-s911_galaxys23_front_lavender_221122.jpg",
        category: "Electrónica",
      },
      {
        id: 102,
        name: "Laptop HP Pavilion 15",
        description:
          "Laptop con procesador Intel Core i7, 16GB RAM, SSD 512GB, pantalla Full HD",
        price: 749,
        image:
          "https://pccenter.com.ar/cdn/shop/files/FotosTivbbendaOnline@2x.jpg?v=1723493700",
        category: "Electrónica",
      },
      {
        id: 103,
        name: "Auriculares Sony WH-1000XM5",
        description:
          "Auriculares inalámbricos con cancelación de ruido y 30 horas de batería",
        price: 349,
        image:
          "https://assets.entrepreneur.com/content/3x2/2000/1717744762-Sonyheadphonescolors.jpg",
        category: "Audio",
      },
      {
        id: 104,
        name: "Smartwatch Apple Watch Series 8",
        description:
          "Reloj inteligente con monitor de frecuencia cardíaca y oxígeno en sangre",
        price: 399,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_863059-MLA52129090254_102022-O.webp",
        category: "Wearables",
      },
      {
        id: 105,
        name: "Tablet Amazon Fire HD 10",
        description: "Tablet de 10.1 pulgadas, 32GB, con Alexa integrada",
        price: 149,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_632481-MLA44172464184_112020-O.webp",
        category: "Electrónica",
      },
      {
        id: 106,
        name: "Dron DJI Mavic 3",
        description: "Dron profesional con cámara Hasselblad 4K",
        price: 1599,
        image:
          "https://images.bidcom.com.ar/resize?src=https://static.bidcom.com.ar/publicacionesML/productos/DRDJI034/1000x1000-DRDJI034.jpg&w=800&q=100",
        category: "Fotografía y Video",
      },
      {
        id: 107,
        name: "Monitor LG UltraWide",
        description: "Monitor 34 pulgadas 1440p curvado",
        price: 499,
        image:
          "https://http2.mlstatic.com/D_685318-MLA54921513210_042023-O.jpg",
        category: "Informática",
      },
      {
        id: 108,
        name: "Altavoz JBL PartyBox",
        description: "Altavoz portátil con luces LED",
        price: 299,
        image:
          "https://m.media-amazon.com/images/I/810nGMz0r8L._AC_SL1500_.jpg",
        category: "Audio",
      },
    ],
  },
  {
    title: "Productos para el hogar",
    products: [
      {
        id: 201,
        name: "Robot aspirador Xiaomi Mi Robot",
        description:
          "Aspiradora inteligente con navegación láser y control por app",
        price: 299,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbTHqpJhK2AofK3BgcOy4JKskUxij964MzQ&s",
        category: "Limpieza",
      },
      {
        id: 202,
        name: "Juego de sábanas algodón egipcio",
        description: "Juego de 4 piezas, 600 hilos, tamaño queen, color blanco",
        price: 89,
        image:
          "https://acdn-us.mitiendanube.com/stores/004/961/185/products/whatsapp-image-2024-09-23-at-14-53-25-cc35f389dcb313461817271145134952-1024-1024.jpeg",
        category: "Dormitorio",
      },
      {
        id: 203,
        name: "Olla instantánea Duo Crisp",
        description:
          "Olla a presión eléctrica 8 en 1 con función de aire frito",
        price: 159,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_600515-MLA84033144575_042025-O.webp",
        category: "Cocina",
      },
      {
        id: 204,
        name: "Set de cuchillos profesionales",
        description:
          "Set de 6 cuchillos de acero inoxidable con bloque de madera",
        price: 129,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk02vyqXKxTdMYoBGQigfKQGXABHigaytnXw&s",
        category: "Cocina",
      },
      {
        id: 205,
        name: "Lámpara de pie LED",
        description:
          "Lámpara regulable con control remoto y 16 colores diferentes",
        price: 59,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_679906-MLA47090756111_082021-O.webp",
        category: "Iluminación",
      },
      {
        id: 206,
        name: "Purificador de aire Dyson",
        description: "Purificador con filtro HEPA y control por app",
        price: 549,
        image:
          "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/it/cooking/2021/AEM-TP09-overview-hero-cooking-v3.jpg?$responsive$&cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640",
        category: "Climatización",
      },
      {
        id: 207,
        name: "Cafetera Nespresso Vertuo",
        description: "Cafetera con cápsulas y espumador de leche",
        price: 179,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_729221-MLA82640614721_022025-O.webp",
        category: "Café y Bebidas",
      },
      {
        id: 208,
        name: "Batidora KitchenAid",
        description: "Batidora profesional 5.5L con 10 velocidades",
        price: 429,
        image:
          "https://kaidarg.vtexassets.com/arquivos/ids/155737/image-eb561391e134465ea9f20f6562f2a8f0.jpg?v=638388840193600000",
        category: "Electrodomésticos de cocina",
      },
    ],
  },
  {
    title: "Equipamiento deportivo",
    products: [
      {
        id: 301,
        name: "Bicicleta montaña Trek Marlin 5",
        description:
          "Bicicleta de montaña con cuadro de aluminio y 21 velocidades",
        price: 649,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpHsu8uFkLcMqRE4iWJ3OBWgVr29lJ2Fn7Q&s",
        category: "Ciclismo",
      },
      {
        id: 302,
        name: "Zapatillas running Nike Air Zoom",
        description:
          "Zapatillas para running con amortiguación Zoom Air y suela de goma",
        price: 129,
        image:
          "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-nike-air-zoom-pegasus-40-negra-510010dv3853001-1_1.jpg",
        category: "Calzado deportivo",
      },
      {
        id: 303,
        name: "Tienda de campaña Coleman",
        description: "Tienda para 4 personas, impermeable, fácil de armar",
        price: 149,
        image:
          "https://m.media-amazon.com/images/I/51N9HzKaKhL._AC_SL1347_.jpg",
        category: "Camping",
      },
      {
        id: 304,
        name: "Mancuernas ajustables",
        description: "Set de 2 mancuernas ajustables de 5-25kg cada una",
        price: 199,
        image:
          "https://m.media-amazon.com/images/I/71mD9tv7h5L._AC_UF1000,1000_QL80_.jpg",
        category: "Entrenamiento",
      },
      {
        id: 305,
        name: "Reloj deportivo Garmin Forerunner",
        description:
          "Reloj GPS para running con monitor de frecuencia cardíaca",
        price: 249,
        image: "https://garmin.com.ar/Image/0/750_750-1161.jpg",
        category: "Wearables",
      },
      {
        id: 306,
        name: "Raqueta de tenis Wilson",
        description: "Raqueta profesional Pro Staff",
        price: 229,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BjtstLS8zTx3EzoldUw9b4SGj4mpFAtoig&s",
        category: "Tenis",
      },
      {
        id: 307,
        name: "Pelota de fútbol Adidas",
        description: "Pelota oficial Champions League",
        price: 129,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6slZjZEemOiXzBa0I2qYNxy4BZHf6SnsXveXe3A1kDx8L83Oe_hRYgtw6fA6AjVbZS8&usqp=CAU",
        category: "Fútbol",
      },
      {
        id: 308,
        name: "Mesa de ping pong",
        description: "Mesa regulable para interior/exterior",
        price: 399,
        image:
          "https://acdn-us.mitiendanube.com/stores/001/338/668/products/mesa-ping-pong-tb2000-1-6d12663565056d2dc817147531483923-1024-1024.jpg",
        category: "Juegos de mesa",
      },
    ],
  },
  {
    title: "Productos Destacados del Mes",
    products: [
      {
        id: 701,
        name: "Cámara Sony Alpha A7 IV",
        description: "Cámara mirrorless full frame 33MP con 4K/60p",
        price: 2499,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-deZY7IRdXKJIwrf9om7qHt4FkvNAOi_epg&s",
        category: "Fotografía y Video",
      },
      {
        id: 702,
        name: "Bicicleta Eléctrica Trek",
        description: "Bicicleta urbana con motor 250W y autonomía 70km",
        price: 2899,
        image:
          "https://http2.mlstatic.com/D_NQ_NP_649715-MLA79230444117_092024-O.webp",
        category: "Movilidad Eléctrica",
      },
      {
        id: 703,
        name: "Mochila The North Face",
        description: "Mochila resistente al agua 30L con portátil",
        price: 129,
        image:
          "https://cdn-images.farfetch-contents.com/25/13/93/12/25139312_55242724_1000.jpg",
        category: "Accesorios",
      },
      {
        id: 704,
        name: "Consola PlayStation 5",
        description: "Edición estándar con lector Blu-Ray 825GB",
        price: 499,
        image:
          "https://arsonyb2c.vtexassets.com/arquivos/ids/366581/Imagen-01_2000-x-2000-px.jpg.jpg?v=638826154074330000",
        category: "Gaming",
      },
      {
        id: 705,
        name: "Smart TV LG OLED 65''",
        description: "TV 4K HDR con Dolby Vision y WebOS",
        price: 1799,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2PIWIwzDw-8U08xFOSRvSjcInaFeKUqHBA&s",
        category: "Electrónica",
      },
      {
        id: 706,
        name: "Cafetera Breville Barista",
        description: "Máquina espresso con molinillo integrado",
        price: 699,
        image:
          "https://cronicasfreelancer.com/wp-content/uploads/2023/04/sage-barista-express.jpg",
        category: "Café y Bebidas",
      },
      {
        id: 707,
        name: "Reloj Casio G-Shock",
        description: "Resistente a golpes, agua 200m y solar",
        price: 199,
        image:
          "https://zonazero.com.ar/cdn/shop/files/gwg-1000-1a_seq1.jpg?v=1721085371",
        category: "Accesorios",
      },
    ],
  },
];
