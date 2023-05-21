import classes from './ButtonsSection.module.css';
import Card from './UI/Card';
import Button from './Button';
import { useContext } from 'react';
import ColorContext from '../store/colors-cotext';

const ButtonsSection = () => {
  const colorCtx = useContext(ColorContext);

  let mainClasses;
  let delClasses;
  let resetClasses;
  let equalClasses;

  if (colorCtx.color === 1) {
    mainClasses = `${classes.main} ${classes['main-theme-one']}`;
    delClasses = `${classes.del} ${classes['del-theme-one']} `;
    resetClasses = `${classes.reset} ${classes['reset-theme-one']}`;
    equalClasses = `${classes.equal} ${classes['equal-theme-one']}`;
  }
  if (colorCtx.color === 2) {
    mainClasses = `${classes.main} ${classes['main-theme-two']}`;
    delClasses = `${classes.del} ${classes['del-theme-two']}`;
    resetClasses = `${classes.reset} ${classes['reset-theme-two']}`;
    equalClasses = `${classes.equal} ${classes['equal-theme-two']}`;
  }
  if (colorCtx.color === 3) {
    mainClasses = `${classes.main} ${classes['main-theme-three']}`;
    delClasses = `${classes.del} ${classes['del-theme-three']}`;
    resetClasses = `${classes.reset} ${classes['reset-theme-three']}`;
    equalClasses = `${classes.equal} ${classes['equal-theme-three']}`;
  }

  return (
    <Card className={mainClasses}>
      <Button keypad={7} />
      <Button keypad={8} />
      <Button keypad={9} />
      <Button className={delClasses} keypad={'DEL'} />
      <Button keypad={4} />
      <Button keypad={5} />
      <Button keypad={6} />
      <Button keypad={'+'} />
      <Button keypad={1} />
      <Button keypad={2} />
      <Button keypad={3} />
      <Button keypad={'-'} />
      <Button keypad={'.'} />
      <Button keypad={0} />
      <Button keypad={'/'} />
      <Button keypad={'x'} />
      <Button className={resetClasses} keypad={'RESET'} />
      <Button className={equalClasses} keypad={'='} />
    </Card>
  );
};

export default ButtonsSection;
