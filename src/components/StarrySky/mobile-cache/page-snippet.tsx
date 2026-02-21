/**
 * Кэш: фрагмент страницы Starry Sky для переключения десктоп/мобилка.
 * При восстановлении мобилки — вставить эту логику в src/pages/StarrySky/ui/StarrySky.tsx.
 * Все константы мобилки — MOBILE_*, импорт только из мобильного модуля (constants/mobile.ts).
 */

import { useRef } from 'react';
import './StarrySky.css';
import { StarrySkyChart, StarrySkyMobileChart } from '../../../components/StarrySky';
import useContainerDimensions from '../hooks/useContainerDimensions';
import {
    MOBILE_BREAKPOINT,
    MOBILE_SECTION_HEIGHT,
    MOBILE_GAP,
    MOBILE_TOTAL_HEIGHT,
} from '../../../components/StarrySky/constants/mobile'; // при восстановлении: путь к constants/mobile.ts

export function StarrySky() {
    const ref = useRef<HTMLDivElement>(null);
    const sizeDiv = useContainerDimensions(ref);
    const isMobile = sizeDiv.width > 0 && sizeDiv.width < MOBILE_BREAKPOINT;
    const dimensions = isMobile
        ? { width: sizeDiv.width, height: MOBILE_TOTAL_HEIGHT }
        : { width: sizeDiv.width, height: sizeDiv.height - 20 };

    return (
        <div className="starry-sky">
            <h1 className="starry-sky__title">Звёздное небо</h1>
            <p className="starry-sky__intro">
                Интерактивная визуализация одной из моих работ на D3.js
            </p>
            <div
                ref={ref}
                className={`starry-sky__canvas ${isMobile ? 'starry-sky__canvas--mobile' : ''}`}
            >
                {isMobile ? (
                    <StarrySkyMobileChart dimensions={dimensions} targetYear={2025} />
                ) : (
                    <StarrySkyChart dimensions={dimensions} targetYear={2025} />
                )}
            </div>
        </div>
    );
}
