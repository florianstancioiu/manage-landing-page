import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './SimplifySection.module.css';
import Button from './UI/Button';

const SimplifySection = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
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
      className={classes.simplify}
    >
      <div className={classes['inner-wrapper']}>
        <p className={classes.title}>Simplify how your team works today.</p>
        <Button title='Get Started' alternate />
      </div>
    </motion.div>
  );
};

export default SimplifySection;
