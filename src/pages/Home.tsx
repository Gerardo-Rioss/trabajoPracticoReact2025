import MainContent from "../components/features/MainContent/MainContent";
import type { Product } from "../types/Product";

type HomeProps = {
  listProducts: Product[];
};

function Home(props: HomeProps) {
  const { listProducts } = props;
  return (
    <>
      <MainContent listProducts={listProducts} />
    </>
  );
}

export default Home;
