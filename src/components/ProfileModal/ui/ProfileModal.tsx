import { useEffect } from 'react';
import './ProfileModal.css';

const CONTACTS = [
  { label: 'Email', value: 'malghin@yandex.ru', href: 'mailto:malghin@yandex.ru' },
  { label: 'Телефон', value: '+7 965 222-54-55', href: 'tel:+79652225455' },
  { label: 'Telegram', value: '@vi18407633', href: 'https://t.me/vi18407633' },
  {
    label: 'LinkedIn',
    value: 'vadim-malgin',
    href: 'https://www.linkedin.com/in/vadim-malgin-a43349197/',
  },
  {
    label: 'hh.ru',
    value: 'Резюме',
    href: 'https://hh.ru/resume/d3fdc24aff074ccc4a0039ed1f327062477239',
  },
] as const;

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="profile-modal__backdrop"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Enter' && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
    >
      <div
        className="profile-modal__box"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button
          type="button"
          className="profile-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2 id="profile-modal-title" className="profile-modal__title">
          Контакты
        </h2>
        <ul className="profile-modal__contacts">
          {CONTACTS.map(({ label, value, href }) => (
            <li key={label} className="profile-modal__contact">
              <span className="profile-modal__contact-label">{label}:</span>{' '}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-modal__contact-link"
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
