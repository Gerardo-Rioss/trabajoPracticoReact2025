import { FiSearch } from "react-icons/fi";
import styles from './SearchBar.module.css'
export const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Buscar productos, marcas y más..."
      />
      <div className={styles.searchDivider}></div>
      <button className={styles.buttonSearch} type="submit">
        <FiSearch className={styles.searchIcon} />
      </button>
    </div>
  );
};
export default SearchBar;
