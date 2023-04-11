import { useState } from 'react';

import classes from './Header.module.css';
import LogoImg from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import CloseIcon from '../images/icon-close.svg';
import HeaderMenuMobile from './HeaderMenuMobile';
import HeaderMenuDesktop from './HeaderMenuDesktop';
import Button from './UI/Button';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.wrapper}>
      <img src={LogoImg} className={classes.logo} alt='Logo Image' />
      <HeaderMenuDesktop />
      <HeaderMenuMobile show={showMenu} />
      <Button title='Get Started' />
      {!showMenu && (
        <img
          src={HamburgerIcon}
          onClick={() => setShowMenu(true)}
          className={classes.hamburger}
          alt=''
        />
      )}
      {showMenu && (
        <img
          src={CloseIcon}
          onClick={() => setShowMenu(false)}
          className={classes.hamburger}
          alt=''
        />
      )}
    </div>
  );
};

export default Header;
