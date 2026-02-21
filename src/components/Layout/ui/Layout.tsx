import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../../Navigation';
import mainPhoto from '../../../assets/images/main-photo.jpg';
import './Layout.css';

export function Layout() {
  const isHome = useLocation().pathname === '/';
  return (
    <div className={`layout ${isHome ? 'layout--home' : ''}`}>
      <header className="layout__header">
        <Navigation avatarUrl={mainPhoto} />
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}
