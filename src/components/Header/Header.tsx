import './Header.scss';
import { NavigationTop } from './NavigationTop';
import { NavigationCenter } from './NavigationCenter';

function Header() {
  return (
    <header className=''>
      <NavigationTop />
      <NavigationCenter />
    </header>
  );
}

export default Header;
