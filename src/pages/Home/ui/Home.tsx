import { useEffect, useState } from 'react';
import { SEARCH_PHRASES } from '../../../lib';
import './Home.css';

const VADIM_COLORS = ['#4285f4', '#ea4335', '#fbbc04', '#4285f4', '#34a853'] as const; // Google-style: V a d i m

export function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);

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

    </div>
  );
}
