import CalcContext from './calc-context';
import { useReducer } from 'react';

const initialValue = {
  value: '0',
};

const calcReducer = (state, action) => {
  if (action.type === 'CLICK') {
    if (state.value === 'Error' || state.value === 'Infinity') {
      return { ...state, value: '0' };
    }

    if (
      state.value.toString().length > 12 &&
      action.value !== 'DEL' &&
      action.value !== 'RESET' &&
      action.value !== '='
    ) {
      return { ...state };
    }

    if (action.value === 'RESET') {
      return { ...state, value: '0' };
    }

    if (action.value === 'DEL') {
      if (state.value.toString().length === 1) {
        console.log('lengthIsOne');

        return { ...state, value: '0' };
      }

      const newValue = state.value.toString().slice(0, -1);

      return { ...state, value: newValue };
    }

    if (
      action.value === '+' ||
      action.value === '-' ||
      action.value === '/' ||
      action.value === 'x'
    ) {
      const lastElement = state.value.toString().slice(-1);

      if (
        lastElement === '+' ||
        lastElement === '-' ||
        lastElement === '/' ||
        lastElement === 'x' ||
        lastElement === '.'
      ) {
        const incomingValue = action.value.toString();
        const oldValueTrimmed = state.value.slice(0, -1);
        const newValue = oldValueTrimmed + incomingValue;

        return { ...state, value: newValue };
      }

      const newValue = state.value + action.value;

      return { ...state, value: newValue };
    }

    if (action.value === '.') {
      const lastElement = state.value.toString().slice(-1);

      if (lastElement === '.') {
        return { ...state };
      }

      if (
        lastElement === '+' ||
        lastElement === '-' ||
        lastElement === '/' ||
        lastElement === 'x'
      ) {
        const newElement = state.value + '0' + '.';
        return {
          ...state,
          value: newElement,
        };
      }
    }

    if (state.value === '0') {
      if (action.value === '.') {
        const newValue = '0.';
        return {
          ...state,
          value: newValue,
        };
      }

      return { ...state, value: action.value };
    }

    if (action.value === '=') {
      console.log('=');
      console.log(state.value);
      if (
        state.value.toString() === '0' ||
        state.value.toString() === '=' ||
        state.value === undefined ||
        state.value === 'Error' ||
        state.value === 'Infinity'
      ) {
        console.log('s');
        return { ...state, value: 0 };
      }

      try {
        console.log('try');

        const replacedValue = state.value.replace('x', '*');

        console.log(replacedValue);
        let newValue = eval(replacedValue);
        if (newValue % 1 !== 0) {
          newValue = newValue.toFixed(2);
        }

        return { ...state, value: newValue };
      } catch {
        console.log('catch');
        const newValue = 'Error';
        return { ...state, value: newValue };
      }
    }

    const incomingValue = action.value.toString();
    const newValue = state.value + incomingValue;

    return { ...state, value: newValue };
  }

  return initialValue;
};

const CalcContextProvider = (props) => {
  const [calcState, dispatchCalcAction] = useReducer(calcReducer, initialValue);

  const btnClickHandler = (value) => {
    dispatchCalcAction({ type: 'CLICK', value: value });
  };

  const calcData = {
    calcState,
    btnClickHandler,
  };

  return (
    <CalcContext.Provider value={calcData}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcContextProvider;
