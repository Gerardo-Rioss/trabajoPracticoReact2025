import styles from "./SideBarContent.module.css";

type SideBarContentProps = {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  priceFilter: string;
  setPriceFilter: (v: string) => void;
  categories: string[];
};
const SideBarContent = (props: SideBarContentProps) => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceFilter,
    setPriceFilter,
    categories,
  } = props;
  return (
    <div className={styles.container}>
      <p>Categorías:</p>
      <div className={styles.filterCategory}>
        <select
          name={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categrías</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <p>Precios:</p>
      <div className={styles.filterPrice}>
        <label htmlFor="">
          <input
            type="radio"
            name="price"
            value=""
            checked={priceFilter === ""}
            onChange={() => setPriceFilter("")}
          />
          Todos
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="price"
            value="Hasta $500"
            checked={priceFilter === "Hasta $500"}
            onChange={() => setPriceFilter("Hasta $500")}
          />
          Hasta $ 500
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="price"
            value="$500 a $1.000"
            checked={priceFilter === "$500 a $1.000"}
            onChange={() => setPriceFilter("$500 a $1.000")}
          />
          $500 a $1.000
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="price"
            value="Mas de $1.000"
            checked={priceFilter === "Mas de $1.000"}
            onChange={() => setPriceFilter("Mas de $1.000")}
          />
          Más de $1.000
        </label>
      </div>
    </div>
  );
};
export default SideBarContent;
