import classes from './TestimonialItemMobile.module.css';

const TestimonialItemMobile = ({ author, avatar, desc, isActive }) => {
  const testClasses = isActive
    ? `${classes.testimonial} ${classes.active}`
    : classes.testimonial;

  return (
    <div className={testClasses}>
      <img src={avatar} className={classes.avatar} alt={`${author} Avatar`} />
      <p className={classes.author}>{author}</p>
      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default TestimonialItemMobile;
