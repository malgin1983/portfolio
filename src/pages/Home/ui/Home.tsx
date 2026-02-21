import { useEffect, useState } from 'react';
import { SEARCH_PHRASES } from '../../../lib';
import { Modal } from '../../../components/Modal';
import './Home.css';

const VADIM_COLORS = ['#4285f4', '#ea4335', '#fbbc04', '#4285f4', '#34a853'] as const; // Google-style: V a d i m

type ModalKind = 'about' | 'stack' | null;

export function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [modalOpen, setModalOpen] = useState<ModalKind>(null);

  const phrase = SEARCH_PHRASES[phraseIndex];
  const visibleText = phrase.slice(0, charIndex);

  useEffect(() => {
    if (isPause) {
      const t = setTimeout(() => {
        setIsPause(false);
        setPhraseIndex((i) => (i + 1) % SEARCH_PHRASES.length);
        setCharIndex(0);
      }, 2500);
      return () => clearTimeout(t);
    }

    if (charIndex < phrase.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 80 + Math.random() * 40);
      return () => clearTimeout(t);
    }

    setIsPause(true);
    return undefined;
  }, [phraseIndex, charIndex, phrase.length, isPause]);

  return (
    <div className="home home--google">
      <div className="home__logo" aria-hidden>
        {'Vadim'.split('').map((letter, i) => (
          <span
            key={i}
            className="home__logo-letter"
            style={{ color: VADIM_COLORS[i % VADIM_COLORS.length] }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="home__search-wrap">
        <div className="home__search-box">
          <span className="home__search-icon" aria-hidden>
            <svg focusable="false" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </span>
          <div className="home__search-input-wrap">
            <span className="home__search-typed">{visibleText}</span>
            <span className="home__search-cursor" aria-hidden />
          </div>
        </div>
      </div>

      <div className="home__buttons">
        <button
          type="button"
          className="home__btn"
          onClick={() => setModalOpen('about')}
        >
          О себе
        </button>
        <button
          type="button"
          className="home__btn"
          onClick={() => setModalOpen('stack')}
        >
          Стэк
        </button>
      </div>

      <Modal
        isOpen={modalOpen === 'about'}
        onClose={() => setModalOpen(null)}
        title="О себе"
      >
        <p>
          Инженер-разработчик с 7-летним опытом создания high-load систем в закрытом контуре (FinTech / E-commerce).
        </p>
        <p>
          Берусь за полный цикл frontend-разработки и отвечаю за технические решения, выдерживая баланс между качеством кода и скоростью бизнеса.
        </p>
        <section className="modal__section">
          <h3 className="modal__section-title">Архитектурные подходы</h3>
          <p>
            Применяю в проектах FSD, Microfrontends, Atomic Design, а также принципы SOLID, GRASP, KISS, DRY, YAGNI для поддерживаемой и масштабируемой фронтенд-архитектуры.
          </p>
        </section>
        <section className="modal__section">
          <h3 className="modal__section-title">Технологический фокус</h3>
          <p>
            Увлекаюсь криптосистемами и высоконагруженными продуктами; активно использую AI-инструменты (Cursor, Claude Sonnet) для ускорения разработки, сохраняя строгий контроль архитектуры и качества кода.
          </p>
        </section>
        <section className="modal__section">
          <h3 className="modal__section-title">Backend (pet-проекты)</h3>
          <p>
            Имею опыт разработки на Express, NestJS и Fastify (REST API, WebSocket) в рамках pet-проектов; понимаю принципы проектирования backend-сервисов и интеграции фронтенда с API.
          </p>
        </section>
      </Modal>

      <Modal
        isOpen={modalOpen === 'stack'}
        onClose={() => setModalOpen(null)}
        title="Стэк"
      >
        <ul>
          <li><strong>Core:</strong> React (Next.js), TypeScript, Svelte.</li>
          <li><strong>State / Data:</strong> Redux Toolkit (RTK Query), Zustand, TanStack Query.</li>
          <li><strong>Styling:</strong> Material UI, Ant Design, Chakra UI, CSS Modules. Figma, Pixo.</li>
          <li><strong>Tools:</strong> Webpack, Vite, SWC, Jest, Jenkins.</li>
          <li><strong>Architecture:</strong> FSD, Layers + Shared Kernel, Atomic design, Microfrontends.</li>
        </ul>
      </Modal>
    </div>
  );
}
