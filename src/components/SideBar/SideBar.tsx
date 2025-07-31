import styles from "./SideBar.module.css";
import { useSearchParams } from "react-router";
import { useCategories } from "../../hooks/useCategories";
import {
  updateCategoryFilter,
  updateSearchParam,
} from "../../utils/searchParams";
const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories } = useCategories();
  
  const handleCategoryChange = (category: string, checked: boolean) => {
    const newParams = updateCategoryFilter(searchParams, category, checked);
    setSearchParams(newParams);
  };
  const handlePriceChange = (key: "minPrice" | "maxPrice", value: string) => {
    const newParams = updateSearchParam(searchParams, key, value);
    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Filtrar productos</h3>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterTitle}>Categorías</h4>
        <div className={styles.selectContainer}>
          {categories?.map((category: string) => (
            <label key={category} className={styles.categoryItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={searchParams.getAll("category").includes(category)}
                onChange={(e) =>
                  handleCategoryChange(category, e.target.checked)
                }
              />
              <span className={styles.categoryLabel}>{category}</span>
            </label>
          ))}
          <span className={styles.selectArrow}>▼</span>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterTitle}>Rango de precios</h4>
        <div className={styles.radioGroup}>
          <input
            type="number"
            placeholder="Precio mínimo"
            className={styles.priceInput}
            value={searchParams.get("minPrice") || ""}
            onChange={(e) => handlePriceChange("minPrice", e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio máximo"
            className={styles.priceInput}
            value={searchParams.get("maxPrice") || ""}
            onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
