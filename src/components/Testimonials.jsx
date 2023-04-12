import { useState, useEffect } from 'react';
import classes from './Testimonials.module.css';
import TestimonialItemMobile from './TestimonialItemMobile';
import TestimonialItemDesktop from './TestimonialItemDesktop';
import Button from './UI/Button';

const Testimonials = () => {
  const [activeId, setActiveId] = useState(1);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data.data));
  }, []);

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>What they’ve said</h2>
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
        <Button title='Get Started' />
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
        <Button title='Get Started' />
      </div>
    </div>
  );
};

export default Testimonials;
