export const PROJECTS = [
  { bold: 'SmartMove', suffix: ' (управление структурой малого бизнеса)' },
  { bold: 'Геймификация бизнеса' },
] as const;

export const COMPETENCIES = [
  'Production-grade разработка: Опыт проектирования архитектуры, которая сохраняет баланс между скоростью доставки фич и долгосрочной поддержкой кода.',
  'Технологический стек: Глубокие знания Next.js и TypeScript; при необходимости готов работать на низкоуровневом (hardware) уровне.',
  'Оптимизация и Performance: Прагматичный подход к рендерингу и ресурсам браузера для обеспечения максимального отклика интерфейса.',
  'Автономность и ответственность: Способен вести крупные проекты с нуля до релиза при минимальном руководстве, принимая взвешенные технические решения.',
  'Полный цикл разработки: от идеи до продакшена',
] as const;

export const STACK_ITEMS = [
  { title: 'Frontend', description: 'React, TypeScript, Redux Toolkit (RTK Query), Next.js, Material UI' },
  { title: 'Tools', description: 'Git, Webpack, Vite, Jest, ESLint, Prettier, Figma' },
  { title: 'Backend', description: 'Node.js (Express), REST API, MongoDB' },
  { title: 'Architecture', description: 'SPA, Micro-Frontends, Performance Optimization, Code Review, CI/CD' },
  { title: 'Languages', description: 'Русский (родной), English (B2 - Upper Intermediate)' },
] as const;

export const RESEARCH_ITEMS = [
  { bold: 'Интеграция AI/ML во frontend', suffix: ' (OpenAI API, генеративный UI)' },
  { bold: 'Современные мета-фреймворки', suffix: ' (Next.js App Router, React Server Components)' },
  { bold: 'Оптимизация производительности', suffix: ' и инструменты измерения (Lighthouse, Web Vitals)' },
] as const;

export const ACHIEVEMENTS = [
  { bold: 'Награда Сбера (2021)', text: ' за быстрый вывод MVP проекта в продакшен' },
  { text: 'Увлекаюсь криптосистемами и высокотехнологичными продуктами; активно использую AI-инструменты' },
  { text: 'Внедрил архитектурные решения, сократившие время загрузки приложений на ~40%' },
] as const;

export const CONTACTS = [
  { href: 'mailto:malghin@yandex.ru', label: 'malghin@yandex.ru', external: false },
  { href: 'https://www.linkedin.com/in/vadim-malgin-a43349197/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/malgin1983', label: 'GitHub', external: true },
] as const;

export const NAV_ITEMS = [
  { to: '/', label: 'Обо мне' },
  { to: '/charts', label: 'Графики' },
  { to: '/starry-sky', label: 'Звёздное небо' },
] as const;

export const BAR_DATA = [
  { label: 'Янв', plan: 40, fact: 35 },
  { label: 'Фев', plan: 55, fact: 52 },
  { label: 'Мар', plan: 70, fact: 78 },
  { label: 'Апр', plan: 85, fact: 82 },
  { label: 'Май', plan: 100, fact: 95 },
  { label: 'Июн', plan: 90, fact: 98 },
] as const;

export const LINE_DATA = [
  { month: 'Янв', value: 30 },
  { month: 'Фев', value: 45 },
  { month: 'Мар', value: 40 },
  { month: 'Апр', value: 65 },
  { month: 'Май', value: 80 },
  { month: 'Июн', value: 95 },
] as const;

export const DONUT_DATA = [
  { label: 'React', value: 35 },
  { label: 'TypeScript', value: 30 },
  { label: 'Redux', value: 20 },
  { label: 'Node.js', value: 15 },
] as const;
