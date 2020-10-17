import { AppContextProvider } from 'contexts/AppContext';
import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default MyApp;
