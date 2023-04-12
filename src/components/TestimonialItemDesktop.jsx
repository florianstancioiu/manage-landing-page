import classes from './TestimonialItemDesktop.module.css';

const TestimonialItemDesktop = ({ author, avatar, desc }) => {
  return (
    <div className={classes.testimonial}>
      <img src={avatar} className={classes.avatar} alt={`${author} Avatar`} />
      <p className={classes.author}>{author}</p>
      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default TestimonialItemDesktop;
