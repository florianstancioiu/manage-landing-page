import classes from './Hero.module.css';
import IntroIllustration from '../images/illustration-intro.svg';
import Button from './UI/Button';

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['image-wrapper']}>
        <img
          className={classes.illustration}
          src={IntroIllustration}
          alt='Intro Illustration'
        />
      </div>
      <div className={classes['text-wrapper']}>
        <h1>Bring everyone together to build better products.</h1>
        <p className={classes.desc}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button title='Get Started' />
      </div>
    </div>
  );
};

export default Hero;
