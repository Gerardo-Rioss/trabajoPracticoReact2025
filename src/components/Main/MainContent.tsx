import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
type Post = {
  id: number;
  title: string;
  image: string;
};
type MainContentProps = {
  posts: Post[] | null;
};

export default function MainContent({ posts }: MainContentProps) {
  return (
    <>
      <ProductList title={"Randon"}>
        {posts?.map((post) => {
          return (
            <ProductCard
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              /* name={post.name}
                  description={post.description}
                  price={post.price}
                  image={post.image} */
            />
          );
        })}
      </ProductList>
      
    </>
  );
}
