/** Константы типов индикаторов (const object вместо enum из-за erasableSyntaxOnly) */
export const WIDGET_INDICATOR_TYPES = {
    CIRCLE: 'CIRCLE',
    BAR: 'BAR',
    TEMPO: 'TEMPO',
    ARC_FORWARD: 'ARC_FORWARD',
    ARC_REVERSE: 'ARC_REVERSE',
    ARC_BOOLEAN: 'ARC_BOOLEAN',
    RING: 'RING',
    HORIZONTAL_BAR: 'HORIZONTAL_BAR',
    HORIZONTAL_BAR_REVERSED: 'HORIZONTAL_BAR_REVERSED',
} as const;

export type WIDGET_INDICATOR_TYPE = (typeof WIDGET_INDICATOR_TYPES)[keyof typeof WIDGET_INDICATOR_TYPES];

/** Типы индикаторов, для которых факт/план считаются в процентах от плана */
export const PERCENT_BASED_INDICATOR_TYPES = [
    'diagramDonat',
    'diagramShelves',
    'diagramShelvesTempo',
] as const;

export type PercentBasedIndicatorType = (typeof PERCENT_BASED_INDICATOR_TYPES)[number];

export function isPercentBasedType(type: string): type is PercentBasedIndicatorType {
    return PERCENT_BASED_INDICATOR_TYPES.includes(type as PercentBasedIndicatorType);
}

