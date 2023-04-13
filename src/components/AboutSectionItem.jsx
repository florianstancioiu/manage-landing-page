import { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './AboutSectionItem.module.css';

const AboutSectionItem = ({ id, title, desc }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const variants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
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
      className={classes.wrapper}
    >
      <div className={classes.title}>
        <span className={classes.id}>{id}</span>
        <span className={classes['actual-title']}>{title}</span>
      </div>
      <div className={classes.desc}>{desc}</div>
    </motion.div>
  );
};

export default AboutSectionItem;
