import type { ComponentType } from 'react';
import { ArcWithArrowIndicator } from '../../ArcWithArrowIndicator';
import { BarIndicator } from '../../BarIndicator';
import { CircleIndicator } from '../../CircleIndicator';
import { RingIndicator } from '../../RingIndicator';
import { TempoIndicator } from '../../TempoIndicator';
import type { IndicatorType } from '../../IndicatorsContainer/data';

/** Общий тип пропсов для любого индикатора (разные компоненты ожидают разные поля). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIndicatorProps = any;

const INDICATOR_MAP: Record<IndicatorType, ComponentType<AnyIndicatorProps>> = {
    diagramPie: CircleIndicator as ComponentType<AnyIndicatorProps>,
    diagramPieMetrics: CircleIndicator as ComponentType<AnyIndicatorProps>,
    diagramShelves: BarIndicator as ComponentType<AnyIndicatorProps>,
    diagramShelvesTempo: TempoIndicator as ComponentType<AnyIndicatorProps>,
    speedometerType_1: ArcWithArrowIndicator as ComponentType<AnyIndicatorProps>,
    speedometerType_2: ArcWithArrowIndicator as ComponentType<AnyIndicatorProps>,
    speedometerType_3: ArcWithArrowIndicator as ComponentType<AnyIndicatorProps>,
    diagramDonat: RingIndicator as ComponentType<AnyIndicatorProps>,
};

export function getIndicator(type: IndicatorType | string): ComponentType<AnyIndicatorProps> {
    return INDICATOR_MAP[type as IndicatorType] ?? BarIndicator;
}

/**
 * Возвращает значение для расчёта max спидометра: plan, если plan > 0, иначе fact.
 */
export function getMaxSpeedometer(plan: number, fact: number): number {
    if (plan === 0 && fact === 0) return plan;
    if (plan === 0 && fact > 0) return fact;
    return plan;
}