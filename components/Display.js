import classes from './Display.module.css';
import Card from './UI/Card';
import { useContext } from 'react';
import ColorContext from '../store/colors-cotext';
import CalcContext from '../store/calc-context';

const Display = () => {
  const colorCtx = useContext(ColorContext);
  const calcCtx = useContext(CalcContext);

  let mainClasses;
  let numberClasses;

  if (colorCtx.color === 1) {
    mainClasses = `${classes.main} ${classes['main-theme-one']}`;
    numberClasses = `${classes.number} ${classes['number-theme-one']}`;
  }
  if (colorCtx.color === 2) {
    mainClasses = `${classes.main} ${classes['main-theme-two']}`;
    numberClasses = `${classes.number} ${classes['number-theme-two']}`;
  }
  if (colorCtx.color === 3) {
    mainClasses = `${classes.main} ${classes['main-theme-three']}`;
    numberClasses = `${classes.number} ${classes['number-theme-three']}`;
  }

  return (
    <Card className={mainClasses}>
      <p className={numberClasses}>{calcCtx.calcState.value}</p>
    </Card>
  );
};

export default Display;
