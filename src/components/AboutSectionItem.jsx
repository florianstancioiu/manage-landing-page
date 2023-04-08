import classes from './AboutSectionItem.module.css';

const AboutSectionItem = ({ id, title, desc }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span className={classes.id}>{id}</span>
        <span className={classes['actual-title']}>{title}</span>
      </div>
      <div className={classes.desc}>{desc}</div>
    </div>
  );
};

export default AboutSectionItem;
