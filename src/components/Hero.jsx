import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './Hero.module.css';
import IntroIllustration from '../images/illustration-intro.svg';
import Button from './UI/Button';

const Hero = () => {
  const imageWrapperControl = useAnimation();
  const textWrapperControl = useAnimation();
  const imageWrapperRef = useRef(null);
  const textWrapperRef = useRef(null);
  const imageWrapperInView = useInView(imageWrapperRef);
  const textWrapperInView = useInView(textWrapperRef);

  useEffect(() => {
    if (imageWrapperInView) {
      imageWrapperControl.start('visible');
    } else {
      imageWrapperControl.start('hidden');
    }

    if (textWrapperInView) {
      textWrapperControl.start('visible');
    } else {
      textWrapperControl.start('hidden');
    }
  }, [
    imageWrapperControl,
    textWrapperControl,
    imageWrapperInView,
    textWrapperInView,
  ]);

  const imageWrapperVariants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };
  const textWrapperVariants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
  };

  return (
    <div className={classes.wrapper}>
      <motion.div
        ref={imageWrapperRef}
        variants={imageWrapperVariants}
        initial='hidden'
        animate={imageWrapperControl}
        className={classes['image-wrapper']}
      >
        <img
          className={classes.illustration}
          src={IntroIllustration}
          alt='Intro Illustration'
        />
      </motion.div>
      <motion.div
        ref={textWrapperRef}
        variants={textWrapperVariants}
        initial='hidden'
        animate={textWrapperControl}
        className={classes['text-wrapper']}
      >
        <h1>Bring everyone together to build better products.</h1>
        <p className={classes.desc}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button title='Get Started' />
      </motion.div>
    </div>
  );
};

export default Hero;
