import styles from './NavFilter.module.css'
type NavFilterProps={
  selectedCategory: string,
  setSelectedCategory:(v:string)=>void,
  priceFilter: string,
  setPriceFilter:(v:string)=>void,
  categories:string[],
}

export const NavFilter = (props: NavFilterProps) => {
  const {selectedCategory,setSelectedCategory,priceFilter,setPriceFilter,categories}= props
  
  return (
    <div className={styles.container}>
      <div>
      <select name={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
      
        <option value="">Todas las categrías</option>
        {categories.map((c)=>(
          <option key={c}  value={c}>{c}</option>
        ))}
      </select>
      </div>
      <div>
        <label htmlFor=""><input type="radio" name='price' value='' checked={priceFilter===""} onChange={()=>setPriceFilter("")}  />Todos</label>
        <label htmlFor=""><input type="radio" name='price' value='Menos de $500' checked={priceFilter==="Menos de $500"} onChange={()=>setPriceFilter("Menos de $500")}  />Menos de $500</label>
        <label htmlFor=""><input type="radio" name='price' value='Mayor o igual a 500' checked={priceFilter==="Mayor o igual a 500"} onChange={()=>setPriceFilter("Mayor o igual a 500")}  />Mayor o igual a $500</label>
        <label htmlFor=""><input type="radio" name='price' value='Mayor a 1000' checked={priceFilter==="Mayor a 1000"} onChange={()=>setPriceFilter("Mayor a 1000")}  />Mayor a $1000</label>
      </div>
    </div>
  );
};
export default NavFilter;
