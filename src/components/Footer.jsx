import classes from './Footer.module.css';
import LogoWhite from '../images/logo-white.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import YoutubeIcon from '../images/icon-youtube.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import InstagramIcon from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes['inbox-updates-wrapper']}>
        <input
          type='text'
          className={classes['updates-input']}
          placeholder='Updates in your inbox...'
        />
        <button type='button' className={classes['inbox-btn']}>
          Go
        </button>
      </div>
      <div className={classes['links-wrapper']}>
        <ul>
          <li>
            <a href='#' className={classes.link}>
              Home
            </a>
          </li>
          <li>
            <a href='#' className={classes.link}>
              Pricing
            </a>
          </li>
          <li>
            <a href='#' className={classes.link}>
              Products
            </a>
          </li>
          <li>
            <a href='#' className={classes.link}>
              About us
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#' className={classes.link}>
              Careers
            </a>
          </li>
          <li>
            <a href='#' className={classes.link}>
              Community
            </a>
          </li>
          <li>
            <a href='#' className={classes.link}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className={classes['social-icons-wrapper']}>
        <a href='#'>
          <img className={classes['social-icon']} src={FacebookIcon} alt='' />
        </a>
        <a href='#'>
          <img className={classes['social-icon']} src={YoutubeIcon} alt='' />
        </a>
        <a href='#'>
          <img className={classes['social-icon']} src={TwitterIcon} alt='' />
        </a>
        <a href='#'>
          <img className={classes['social-icon']} src={PinterestIcon} alt='' />
        </a>
        <a href='#'>
          <img className={classes['social-icon']} src={InstagramIcon} alt='' />
        </a>
      </div>
      <div className={classes.logo}>
        <a href='#'>
          <img src={LogoWhite} alt='Footer Logo' />
        </a>
      </div>
      <p className={classes.copyright}>Copyright 2020. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
