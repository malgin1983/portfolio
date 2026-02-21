import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../../lib';
import './Navigation.css';

interface NavigationProps {
  avatarUrl: string;
}

export function Navigation({ avatarUrl }: NavigationProps) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_ITEMS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'nav__link--active' : ''}`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink to="/" className="nav__avatar-link" aria-label="На главную">
        <img src={avatarUrl} alt="Вадим Мальгин" className="nav__avatar" />
      </NavLink>
    </nav>
  );
}
