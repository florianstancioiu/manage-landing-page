import classes from './Button.module.css';

const Button = ({ title, alternate }) => {
  const btnClasses = alternate
    ? `${classes.btn} ${classes.alternate}`
    : classes.btn;

  return (
    <button type='button' className={btnClasses}>
      {title}
    </button>
  );
};

export default Button;
