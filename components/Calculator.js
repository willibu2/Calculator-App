import classes from './Calculator.module.css';
import ButtonsSection from './ButtonsSection';
import SwitchContainer from './SwitchContainer';
import Display from './Display';
import { useContext } from 'react';
import ColorContext from '../store/colors-cotext';

const Calculator = () => {
  const colorCtx = useContext(ColorContext);

  let backgroundClasses;

  if (colorCtx.color === 1) {
    backgroundClasses = `${classes.background} ${classes['theme-one']} `;
  }
  if (colorCtx.color === 2) {
    backgroundClasses = `${classes.background} ${classes['theme-two']} `;
  }
  if (colorCtx.color === 3) {
    backgroundClasses = `${classes.background} ${classes['theme-three']} `;
  }

  if (colorCtx)
    return (
      <div className={backgroundClasses}>
        <div className={classes.main}>
          <SwitchContainer />
          <Display />
          <ButtonsSection />
        </div>
      </div>
    );
};

export default Calculator;
