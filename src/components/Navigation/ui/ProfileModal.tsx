import { useEffect } from 'react';
import './ProfileModal.css';

const PROFILE_TEXT = {
  intro:
    'Инженер-разработчик с 5-летним опытом создания high-load систем в закрытом контуре (FinTech / E-commerce). Берусь за полный цикл frontend-разработки и отвечаю за технические решения, выдерживая баланс между качеством кода и скоростью бизнеса.',
  architecture:
    'Применяю в проектах FSD, Microfrontends, Atomic Design, а также принципы SOLID, GRASP, KISS, DRY, YAGNI для поддерживаемой и масштабируемой фронтенд-архитектуры.',
  focus:
    'Увлекаюсь криптосистемами и высоконагруженными продуктами; активно использую AI-инструменты (Cursor, Claude Sonnet) для ускорения разработки, сохраняя строгий контроль архитектуры и качества кода.',
  backend:
    'Имею опыт разработки на Express, NestJS и Fastify (REST API, WebSocket) в рамках pet-проектов; понимаю принципы проектирования backend-сервисов и интеграции фронтенда с API.',
};

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  avatarUrl: string;
}

export function ProfileModal({ isOpen, onClose, avatarUrl }: ProfileModalProps) {
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
          Вадим Мальгин
        </h2>
        <div className="profile-modal__avatar-wrap">
          <img
            src={avatarUrl}
            alt=""
            className="profile-modal__avatar"
          />
        </div>
        <div className="profile-modal__content">
          <p className="profile-modal__intro">{PROFILE_TEXT.intro}</p>
          <section className="profile-modal__section">
            <h3 className="profile-modal__section-title">Архитектурные подходы</h3>
            <p>{PROFILE_TEXT.architecture}</p>
          </section>
          <section className="profile-modal__section">
            <h3 className="profile-modal__section-title">Технологический фокус</h3>
            <p>{PROFILE_TEXT.focus}</p>
          </section>
          <section className="profile-modal__section">
            <h3 className="profile-modal__section-title">Backend (pet-проекты)</h3>
            <p>{PROFILE_TEXT.backend}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
