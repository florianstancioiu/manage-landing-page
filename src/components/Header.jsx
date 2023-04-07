import classes from './Header.module.css';
import LogoImg from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <img src={LogoImg} className={classes.logo} alt='Logo Image' />
      <img src={HamburgerIcon} className={classes.hamburger} alt='' />
    </div>
  );
};

export default Header;
