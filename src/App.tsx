import { GlobalStyle } from './components/GlobalStyle';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <>
      <GlobalStyle>
        <AppRouter />
      </GlobalStyle>
    </>
  );
}

export default App;
