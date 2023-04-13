import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './TestimonialItemMobile.module.css';

const TestimonialItemMobile = ({ author, avatar, desc, isActive }) => {
  const testClasses = isActive
    ? `${classes.testimonial} ${classes.active}`
    : classes.testimonial;

  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const variants = {
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hidden: { scale: 0.2, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [inView, control]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={control}
      className={testClasses}
    >
      <img src={avatar} className={classes.avatar} alt={`${author} Avatar`} />
      <p className={classes.author}>{author}</p>
      <p className={classes.desc}>{desc}</p>
    </motion.div>
  );
};

export default TestimonialItemMobile;
