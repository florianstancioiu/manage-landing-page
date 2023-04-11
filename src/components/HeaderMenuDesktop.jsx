import classes from './HeaderMenuDesktop.module.css';

const HeaderMenuDesktop = () => {
  return (
    <div className={classes.wrapper}>
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
  );
};

export default HeaderMenuDesktop;
