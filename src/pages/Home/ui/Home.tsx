import mainPhoto from '../../../assets/images/main-photo.jpg';
import { PROJECTS, COMPETENCIES, STACK_ITEMS, RESEARCH_ITEMS, ACHIEVEMENTS, CONTACTS } from '../../../lib';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <section className="home__photo-section">
        <img src={mainPhoto} alt="Вадим Мальгин" className="home__photo" />
      </section>
      <section className="home__hero">
        <div className="home__intro">
          <h1 className="home__title">
            Привет! Меня зовут <span className="home__name">Вадим Мальгин</span>
          </h1>
          <p className="home__subtitle">
            Software Engineer, Frontend Developer (React, TypeScript, Architecture, LLM)
          </p>
          <p className="home__location">📍 Москва</p>
        </div>
      </section>

      <section className="home__section">
        <h2>🚀 Мой опыт</h2>
        <p>
          С 2020 года разрабатываю frontend для бизнес-продуктов в <strong>Сбере</strong>:
        </p>
        <ul>
          {PROJECTS.map((item) => (
            <li key={item.bold}>
              <strong>{item.bold}</strong>
              {'suffix' in item && item.suffix}
            </li>
          ))}
        </ul>
        <p><strong>Мои ключевые компетенции:</strong></p>
        <ul>
          {COMPETENCIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <blockquote className="home__blockquote">
          Основная коммерческая разработка ведётся в корпоративных репозиториях Сбера (Bitbucket). 
          Архитектурные решения и подходы готов обсуждать на собеседовании.
        </blockquote>
      </section>

      <section className="home__section">
        <h2>🔧 Технологический стек</h2>
        <div className="home__stack">
          {STACK_ITEMS.map(({ title, description }) => (
            <div key={title} className="home__stack-item">
              <strong>{title}</strong>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home__section">
        <h2>📚 Исследования и хобби-проекты</h2>
        <p>В свободное время изучаю и экспериментирую с:</p>
        <ul>
          {RESEARCH_ITEMS.map((item) => (
            <li key={item.bold}>
              <strong>{item.bold}</strong>
              {item.suffix}
            </li>
          ))}
        </ul>
      </section>

      <section className="home__section">
        <h2>🏆 Достижения</h2>
        <ul>
          {ACHIEVEMENTS.map((item) => (
            <li key={'bold' in item ? item.bold : item.text.slice(0, 30)}>
              {'bold' in item && item.bold && <strong>{item.bold}</strong>}
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="home__section home__contacts">
        <h2>📫 Контакты</h2>
        <div className="home__contact-links">
          {CONTACTS.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
