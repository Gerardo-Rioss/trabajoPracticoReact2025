import MainContent from "../components/Main/MainContent"
import type { ProductList } from "../types/ProductList";
import type { Product } from "../types/Product";

type HomeProps = {
    filteredList: ProductList[];
    isInCart: (id: number) => boolean;
    addToCart: (p: Product) => void;
    removeFromCart: (id: number) => void;
  };

function Home(props: HomeProps) {
  const { filteredList, isInCart, addToCart, removeFromCart } = props;
  return (
    <>
      <MainContent
        lists={filteredList}
        isInCart={isInCart}
        add={addToCart}
        remove={removeFromCart}
      />
    </>
  );
}

export default Home;
