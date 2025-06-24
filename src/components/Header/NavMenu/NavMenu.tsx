import styles from './NavMenu.module.css'
type NavMenuProps={
  total: number,
}
export const NavMenu = (props:NavMenuProps) => {
  const {total} = props
  return (
    <div className={styles.container}>
      <div>🛒</div>
      <div className={styles.total}> Total: ${total.toFixed(2)}</div>
    </div>
  );
}
export default NavMenu;