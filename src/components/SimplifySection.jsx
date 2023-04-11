import classes from './SimplifySection.module.css';
import Button from './UI/Button';

const SimplifySection = () => {
  return (
    <div className={classes.simplify}>
      <div className={classes['inner-wrapper']}>
        <p className={classes.title}>Simplify how your team works today.</p>
        <Button title='Get Started' alternate />
      </div>
    </div>
  );
};

export default SimplifySection;
