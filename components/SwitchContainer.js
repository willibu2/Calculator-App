import classes from './SwitchContainer.module.css';
import { useContext } from 'react';
import ColorContext from '../store/colors-cotext';

const SwitchContainer = () => {
  const colorsCtx = useContext(ColorContext);

  let buttonsContainerClasses;
  let mainClasses;

  if (colorsCtx.color === 1) {
    buttonsContainerClasses = `${classes['buttons-container']} ${classes['theme-one']}`;
    mainClasses = `${classes.main} ${classes['main-theme-one']}`;
  }
  if (colorsCtx.color === 2) {
    buttonsContainerClasses = `${classes['buttons-container']} ${classes['theme-two']}`;
    mainClasses = `${classes.main} ${classes['main-theme-two']}`;
  }
  if (colorsCtx.color === 3) {
    buttonsContainerClasses = `${classes['buttons-container']} ${classes['theme-three']}`;
    mainClasses = `${classes.main} ${classes['main-theme-three']}`;
  }

  const firstButtonClasses =
    colorsCtx.color === 1
      ? `${classes.btn} ${classes.first}`
      : `${classes.btn} ${classes.first} ${classes.inactive}`;
  const secondButtonClasses =
    colorsCtx.color === 2
      ? `${classes.btn} ${classes.second}`
      : `${classes.btn} ${classes.second} ${classes.inactive}`;
  const thirdButtonClasses =
    colorsCtx.color === 3
      ? `${classes.btn} ${classes.third}`
      : `${classes.btn} ${classes.third} ${classes.inactive}`;

  return (
    <div className={mainClasses}>
      <h1 className={classes.title}>calc</h1>
      <p className={classes.text}>THEME</p>
      <div className={classes.switcher}>
        <div className={classes['numbers-container']}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className={buttonsContainerClasses}>
          <button
            className={firstButtonClasses}
            onClick={colorsCtx.colorsSwitchHandler.bind(null, 1)}
          />
          <button
            className={secondButtonClasses}
            onClick={colorsCtx.colorsSwitchHandler.bind(null, 2)}
          />
          <button
            className={thirdButtonClasses}
            onClick={colorsCtx.colorsSwitchHandler.bind(null, 3)}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchContainer;
