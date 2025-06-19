import styles from './NavMenu.module.css'
type NavMenuProps={
  total: number,
}
export const NavMenu = (props:NavMenuProps) => {
  const {total} = props
  return (
    <div className={styles.links}>
      <a href="">🛒 Total: <strong>${total}</strong> </a>
    </div>
  );
}
export default NavMenu;