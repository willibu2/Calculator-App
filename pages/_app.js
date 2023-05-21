import '../styles/globals.css';
import ColorContextProvider from '../store/ColorsContextProvider';
import CalcContextProvider from '../store/CalcContextProvider';

export default function App({ Component, pageProps }) {
  return (
    <CalcContextProvider>
      <ColorContextProvider>
        <Component {...pageProps} />
      </ColorContextProvider>
    </CalcContextProvider>
  );
}
