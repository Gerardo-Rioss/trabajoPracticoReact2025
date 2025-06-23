import styles from './NavMenu.module.css'
type NavMenuProps={
  total: number,
}
export const NavMenu = (props:NavMenuProps) => {
  const {total} = props
  return (
    <div className={styles.total}>
    🛒  Total: ${total.toFixed(2)}
    </div>
  );
}
export default NavMenu;