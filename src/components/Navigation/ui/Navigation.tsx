import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../../lib';
import './Navigation.css';

export function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo">
        ВМ
      </NavLink>
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
    </nav>
  );
}
