import { useState, useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './Header.module.css';
import LogoImg from '../images/logo.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import CloseIcon from '../images/icon-close.svg';
import HeaderMenuMobile from './HeaderMenuMobile';
import HeaderMenuDesktop from './HeaderMenuDesktop';
import Button from './UI/Button';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const control = useAnimation();
  const headerRef = useRef(null);
  const inView = useInView(headerRef);
  const headerVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: -40, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={headerRef}
      variants={headerVariants}
      className={classes.wrapper}
      initial='hidden'
      animate={control}
    >
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
    </motion.div>
  );
};

export default Header;
