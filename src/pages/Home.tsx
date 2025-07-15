import MainContent from "../components/Main/MainContent"
import type { ProductList } from "../types/ProductList";
type HomeProps = {
    filteredList: ProductList[];
  };

function Home(props: HomeProps) {
  const { filteredList  } = props;
  return (
    <>
      <MainContent
        lists={filteredList}
      />
    </>
  );
}

export default Home;
