import { useEffect, useState, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

import classes from './AboutSection.module.css';
import AboutSectionItem from './AboutSectionItem';

const AboutSection = () => {
  const [items, setItems] = useState([]);
  const differentWrapperControl = useAnimation();
  const differentWrapperRef = useRef(null);
  const differentWrapperInView = useInView(differentWrapperRef);
  const diffrenteWrapperVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  useEffect(() => {
    fetch('about-items.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  useEffect(() => {
    if (differentWrapperInView) {
      differentWrapperControl.start('visible');
    } else {
      differentWrapperControl.start('hidden');
    }
  }, [differentWrapperInView, differentWrapperControl]);

  return (
    <div className={classes.wrapper}>
      <motion.div
        ref={differentWrapperRef}
        variants={diffrenteWrapperVariants}
        initial='hidden'
        animate={differentWrapperControl}
        className={classes['different-wrapper']}
      >
        <h2 className={classes.title}>What’s different about Manage?</h2>
        <p className={classes.description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </motion.div>
      <div className={classes['about-items-wrapper']}>
        {items.map((item, index) => (
          <AboutSectionItem
            key={index}
            id={item.id}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
