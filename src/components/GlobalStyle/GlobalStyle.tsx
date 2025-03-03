import '@/assets/sass/globalstyle.scss';
import 'react-datepicker/dist/react-datepicker.css';

function GlobalStyle({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default GlobalStyle;
