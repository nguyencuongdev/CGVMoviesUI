import { Provider } from 'react-redux';

import { GlobalStyle } from './components/GlobalStyle';
import AppRouter from './routers/AppRouter';
import { store } from '@/store';
import AppIntl18Provider from '@/i18n/AppIntl18Provider';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle>
          <AppIntl18Provider>
            <AppRouter />
          </AppIntl18Provider>
        </GlobalStyle>
      </Provider>
    </>
  );
}

export default App;
