import classes from './Button.module.css';
import { useContext } from 'react';
import ColorContext from '../store/colors-cotext';
import CalcContext from '../store/calc-context';

const Button = (props) => {
  const colorCtx = useContext(ColorContext);
  const calcCtx = useContext(CalcContext);

  let btnClasses;

  if (colorCtx.color === 1) {
    btnClasses = `${props.className} ${classes.btn} ${classes['theme-one']}`;
  }
  if (colorCtx.color === 2) {
    btnClasses = `${props.className} ${classes.btn} ${classes['theme-two']}`;
  }
  if (colorCtx.color === 3) {
    btnClasses = `${props.className} ${classes.btn} ${classes['theme-three']}`;
  }

  return (
    <div
      className={btnClasses}
      onClick={calcCtx.btnClickHandler.bind(null, props.keypad)}
    >
      {props.keypad}
    </div>
  );
};

export default Button;
