import ColorContext from './colors-cotext';
import { useState } from 'react';

const ColorContextProvider = (props) => {
  const [color, setColor] = useState(1);

  const colorsSwitchHandler = (number) => {
    setColor(number);
  };

  const initialValue = {
    color,
    colorsSwitchHandler,
  };

  return (
    <ColorContext.Provider value={initialValue}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
