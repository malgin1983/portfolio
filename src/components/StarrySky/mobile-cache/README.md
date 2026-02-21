# Кэш мобильной версии Starry Sky

После отката правок десктопа сюда можно вернуться и заново подключить мобильную версию.

## Правило

**Все переменные и константы для мобилки должны иметь префикс `MOBILE_` и не пересекаться с десктопом.** Десктопные константы (координаты иконок, области и т.д.) в общих файлах не трогать.

## Что лежит в кэше

- **constants.ts** — только мобильные константы: `MOBILE_REGION_BOUNDS`, `MOBILE_GAP`, `MOBILE_BREAKPOINT`, `MOBILE_SECTION_HEIGHT`, `MOBILE_TOTAL_HEIGHT`.
- **StarrySkyMobileChart.tsx** — компонент мобильного графика (5 секций: Q1 → Q2 → Star of Year → Q3 → Q4).
- **page-snippet.tsx** — фрагмент страницы: проверка ширины, выбор графика, классы и размеры для мобилки.
- **styles.css** — только стили для мобильной раскладки (классы `.starry-sky-mobile`, `.starry-sky__canvas--mobile` и т.д.).

## Как снова подключить мобилку

1. **Константы**  
   Скопировать `mobile-cache/constants.ts` в `src/components/StarrySky/constants/mobile.ts`. В основном `constants/index.ts` **не** добавлять мобильные константы (чтобы не пересекаться с десктопом).

2. **Компонент**  
   Скопировать `mobile-cache/StarrySkyMobileChart.tsx` в `src/components/StarrySky/ui/StarrySkyMobile.tsx`.  
   Заменить импорт мобильных констант: `from './constants'` → `from '../constants/mobile'`.  
   Остальные импорты оставить из `../constants` и `../lib`.

3. **Страница**  
   В `src/pages/StarrySky/ui/StarrySky.tsx`: взять логику из `page-snippet.tsx`.  
   Импорт мобильных констант: `from '../../../components/StarrySky/constants/mobile'`.  
   Переменные только с префиксом `MOBILE_*` (breakpoint, section height, gap, total height).

4. **Стили**  
   Добавить в `src/pages/StarrySky/ui/StarrySky.css` правила из `mobile-cache/styles.css`. Классы только мобильные: не менять общие стили десктопного канваса.

5. **Экспорт**  
   В `src/components/StarrySky/index.ts` экспортировать `StarrySkyMobileChart` из `./ui/StarrySkyMobile`.

## Breakpoint

- Мобилка: `width < MOBILE_BREAKPOINT` (768px).
- Порядок секций на мобилке: Q1 → Q2 → Star of Year → Q3 → Q4.

## Зависимости компонента

`StarrySkyMobileChart` использует общие сущности из `../constants` (не мобильные):  
`STARRY_SKY_QUORTERS`, `starrySkyQuarters`, `STARS_COORDINATES_Q1_TEMPLATE` … `Q4_TEMPLATE`, `coordinatesLine`.  
Мобильные константы (`MOBILE_REGION_BOUNDS`, `MOBILE_GAP`) должны импортироваться только из файла мобильных констант.
