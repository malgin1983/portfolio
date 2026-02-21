/**
 * Только мобильные константы Starry Sky.
 * Не добавлять в общий constants/index.ts — не пересекаться с десктопом.
 * При восстановлении мобилки: создать, например, constants/mobile.ts и экспортировать отсюда.
 */

/** Ширина в px: ниже — мобильная раскладка */
export const MOBILE_BREAKPOINT = 768;

/** Высота одной секции (Q1, Q2, Star, Q3, Q4) на мобилке, px */
export const MOBILE_SECTION_HEIGHT = 300;

/** Отступ между секциями на мобилке, px */
export const MOBILE_GAP = 20;

/** Общая высота скролла мобильного графика: 5 секций + 4 отступа */
export const MOBILE_TOTAL_HEIGHT = 5 * MOBILE_SECTION_HEIGHT + 4 * MOBILE_GAP;

/**
 * Области кварталов и звезды года в координатах 942×537 для мобильной вертикальной раскладки.
 * Увеличенный yMax сдвигает иконки вниз в секции (те же данные — ниже на экране).
 */
export const MOBILE_REGION_BOUNDS = {
    q1: { xMin: 0, xMax: 471, yMin: 265, yMax: 620 },
    q2: { xMin: 471, xMax: 942, yMin: 265, yMax: 620 },
    star: { xMin: 300, xMax: 500, yMin: 250, yMax: 500 },
    q3: { xMin: 0, xMax: 471, yMin: 0, yMax: 320 },
    q4: { xMin: 471, xMax: 942, yMin: 0, yMax: 320 },
} as const;
