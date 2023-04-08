import { useState, useEffect } from 'react';
import classes from './Testimonials.module.css';
import TestimonialItemMobile from './TestimonialItemMobile';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data.data));
  }, []);

  return (
    <div className={classes.wrapper}>
      {testimonials.map((item, index) => (
        <TestimonialItemMobile
          key={index}
          author={item.author}
          avatar={item.avatar}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Testimonials;
