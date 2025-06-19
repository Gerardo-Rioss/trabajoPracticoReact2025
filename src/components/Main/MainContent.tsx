import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";

type Post = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};
type ProductList = {
  title: string;
  decription?: string;
  posts: Post[];
};

type List = {
  lists: ProductList[];
};

export default function MainContent({ lists }: List) {
  return (
    <>
      {lists.map((list, index) => {
        return (
          <ProductList key={index} title={list.title}>
            {list.posts.map((post) => {
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
    </>
  );
}
