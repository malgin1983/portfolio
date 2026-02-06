import { WIDGET_INDICATOR_TYPES } from '../../indicator/constants';

export const ARC_COLORS = {
    gradient1: '#BFEEFD',
    gradient2: '#127785',
    gray: '#CCCCCC',
    red: '#EF877C',
    arrow: '#212121',
    line: '#212121',
    star: '#FFFFFF',
} as const;

export const SPEEDOMETER_TYPE_FORWARD: readonly string[] = [
    'speedometerType_1',
    'speedometerType1',
    WIDGET_INDICATOR_TYPES.ARC_FORWARD,
];

export const SPEEDOMETER_TYPE_REVERSE: readonly string[] = [
    'speedometerType_2',
    'speedometerType2',
    WIDGET_INDICATOR_TYPES.ARC_REVERSE,
];

export const SPEEDOMETER_TYPE_BOOLEAN: readonly string[] = [
    'speedometerType_3',
    'speedometerType3',
    WIDGET_INDICATOR_TYPES.ARC_BOOLEAN,
];

export const SIZE_WIDTH: Record<'s' | 'l' | 'xl', number> = {
    s: 70,
    l: 118,
    xl: 222,
};
