import styles from "./SideBarContent.module.css";

type SideBarContentProps = {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  priceFilter: string;
  setPriceFilter: (v: string) => void;
  categories: string[];
};

const SideBarContent = (
  {selectedCategory,setSelectedCategory,priceFilter,setPriceFilter,categories}: SideBarContentProps) => {
 
  const hasFilters = selectedCategory || priceFilter;
  const clearFilters = () => {
    setSelectedCategory("");
    setPriceFilter("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Filtrar productos</h3>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterTitle}>Categorías</h4>
        <div className={styles.selectContainer}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.selectInput}
          >
            <option value="">Todas las categorías</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <span className={styles.selectArrow}>▼</span>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4 className={styles.filterTitle}>Rango de precios</h4>
        <div className={styles.radioGroup}>
          {[
            { value: "", label: "Todos los precios" },
            { value: "Hasta $500", label: "Hasta $500" },
            { value: "$500 a $1.000", label: "$500 a $1.000" },
            { value: "Mas de $1.000", label: "Más de $1.000" },
          ].map((option) => (
            <label key={option.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={priceFilter === option.value}
                onChange={() => setPriceFilter(option.value)}
                className={styles.radioInput}
                />
              <span className={styles.customRadio}></span>
              {option.label}
            </label>
          ))}
        </div>
      </div>
      {hasFilters && (
        <button onClick={clearFilters} className={styles.clearButton}>
          Limpiar filtros
        </button>
      )}
    </div>
  );
};

export default SideBarContent;
