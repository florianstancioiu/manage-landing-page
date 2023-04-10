import classes from './SimplifySection.module.css';
import Button from './UI/Button';

const SimplifySection = () => {
  return (
    <div className={classes.simplify}>
      <p className={classes.title}>Simplify how your team works today.</p>
      <Button title='Get Started' alternate />
    </div>
  );
};

export default SimplifySection;
