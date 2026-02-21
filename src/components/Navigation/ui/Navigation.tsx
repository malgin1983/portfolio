import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../../lib';
import { ProfileModal } from './ProfileModal';
import './Navigation.css';

interface NavigationProps {
  avatarUrl: string;
}

export function Navigation({ avatarUrl }: NavigationProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
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
        <button
          type="button"
          className="nav__avatar-link"
          onClick={() => setIsProfileOpen(true)}
          aria-label="Открыть профиль"
        >
          <img src={avatarUrl} alt="Вадим Мальгин" className="nav__avatar" />
        </button>
      </nav>
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}
