import { createPortal } from 'react-dom';
import classes from './HeaderMenuMobile.module.css';

const HeaderMenuMobile = ({ show }) => {
  if (!show) return null;

  return createPortal(
    <div className={classes.wrapper}>
      <div className={classes.overlay}></div>
      <div className={classes['inner-wrapper']}>
        <a href='#' className={classes.link}>
          Pricing
        </a>
        <a href='#' className={classes.link}>
          Product
        </a>
        <a href='#' className={classes.link}>
          About Us
        </a>
        <a href='#' className={classes.link}>
          Careers
        </a>
        <a href='#' className={classes.link}>
          Community
        </a>
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default HeaderMenuMobile;
