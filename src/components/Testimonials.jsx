import { useState, useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './Testimonials.module.css';
import TestimonialItemMobile from './TestimonialItemMobile';
import TestimonialItemDesktop from './TestimonialItemDesktop';
import Button from './UI/Button';

const Testimonials = () => {
  const [activeId, setActiveId] = useState(1);
  const [testimonials, setTestimonials] = useState([]);

  const titleControl = useAnimation();
  const buttonOneControl = useAnimation();
  const buttonTwoControl = useAnimation();
  const titleRef = useRef(null);
  const buttonOneRef = useRef(null);
  const buttonTwoRef = useRef(null);
  const titleInView = useInView(titleRef);
  const buttonOneInView = useInView(buttonOneRef);
  const buttonTwoInView = useInView(buttonTwoRef);

  const titleVariants = {
    visible: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { scale: 0.5, y: 100, opacity: 0 },
  };
  const buttonOneVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 100, opacity: 0 },
  };
  const buttonTwoVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 200, opacity: 0 },
  };

  useEffect(() => {
    fetch('testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data.data));
  }, []);

  useEffect(() => {
    if (titleInView) {
      titleControl.start('visible');
    } else {
      titleControl.start('hidden');
    }

    if (buttonOneInView) {
      buttonOneControl.start('visible');
    } else {
      buttonOneControl.start('hidden');
    }

    if (buttonTwoInView) {
      buttonTwoControl.start('visible');
    } else {
      buttonTwoControl.start('hidden');
    }
  }, [
    titleInView,
    titleControl,
    buttonOneInView,
    buttonOneControl,
    buttonTwoInView,
    buttonTwoControl,
  ]);

  return (
    <div className={classes.wrapper}>
      <motion.h2
        ref={titleRef}
        variants={titleVariants}
        initial='hidden'
        animate={titleControl}
        className={classes.title}
      >
        What they've said
      </motion.h2>
      <div className={classes['mobile-testimonials-wrapper']}>
        <div className={classes['mobile-testimonials-inner']}>
          {testimonials.map((item, index) => (
            <TestimonialItemMobile
              key={index}
              isActive={item.id === activeId}
              author={item.author}
              avatar={item.avatar}
              desc={item.desc}
            />
          ))}
        </div>
        <div className={classes['mobile-testimonials-indicators']}>
          {testimonials.map((item) => {
            const indicatorClass =
              item.id === activeId
                ? `${classes['mobile-indicator']} ${classes['active-indicator']}`
                : classes['mobile-indicator'];

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={indicatorClass}
              ></div>
            );
          })}
        </div>
        <motion.div
          ref={buttonOneRef}
          variants={buttonOneVariants}
          initial='hidden'
          animate={buttonOneControl}
        >
          <Button title='Get Started' />
        </motion.div>
      </div>
      <div className={classes['desktop-testimonials-wrapper']}>
        <div className={classes['desktop-inner-wrapper']}>
          {testimonials.map((item, index) => (
            <TestimonialItemDesktop
              key={index}
              isActive={item.id === activeId}
              author={item.author}
              avatar={item.avatar}
              desc={item.desc}
            />
          ))}
        </div>
        <motion.div
          ref={buttonTwoRef}
          variants={buttonTwoVariants}
          initial='hidden'
          animate={buttonTwoControl}
        >
          <Button title='Get Started' />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
