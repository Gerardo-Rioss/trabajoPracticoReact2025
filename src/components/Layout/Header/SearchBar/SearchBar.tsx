import { FiSearch } from "react-icons/fi";
import styles from './SearchBar.module.css'

type SearchBarProps={
  setSearch : (searchValue:string)=>void;
  search:string,
}

export const SearchBar = (props: SearchBarProps) => {
  const {setSearch, search} = props
  return (
    <div className={styles.search}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Buscar productos, marcas y más..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <div className={styles.searchDivider}></div>
      <button className={styles.buttonSearch} type="submit">
        <FiSearch className={styles.searchIcon} />
      </button>
    </div>
  );
};
export default SearchBar;
