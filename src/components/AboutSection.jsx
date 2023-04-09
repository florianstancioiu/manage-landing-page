import { useEffect, useState } from 'react';
import classes from './AboutSection.module.css';
import AboutSectionItem from './AboutSectionItem';

const AboutSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('about-items.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes['different-wrapper']}>
        <h2 className={classes.title}>What’s different about Manage?</h2>
        <p className={classes.description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
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
