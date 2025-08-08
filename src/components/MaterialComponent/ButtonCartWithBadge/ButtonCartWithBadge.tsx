import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { useCart } from '../../../context/CartContext';
import { Link } from "react-router";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function ButtonCartWithBadge() {
  const { cart } = useCart();
  const itemCount = cart.length;
  return (
    <Link to="/cart">
    <IconButton>
      <ShoppingCartOutlinedIcon fontSize="small" />
      <CartBadge badgeContent={itemCount} color="primary" overlap="circular" />
    </IconButton>
    </Link>
  );
}

export default ButtonCartWithBadge;