export const getFactPercent = (current: number, plan: number, starSize: number) => {
    const maxSize = plan - starSize;
    if (current > maxSize && current < plan) {
        return maxSize;
    }
    return current;
};

export const getPlanPercent = (current: number, starSize: number) => {
    if (current > 0 && current < starSize) {
        return starSize;
    }
    return current;
};

/**
 * Получения цвета из градиента
 */
export function getStepColor(
    colorA: number[],
    colorB: number[],
    percent: number,
): number[] {
    return colorA.map((color: number, i: number) => (color + (percent / 100) * (colorB[i] - color)) & 255);
}

/**
 * Конвертация цвета RGB->Hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
    const componentToHex = (c: number): string => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * Конвертация цвета Hex->RGB
 * @param hex
 */
export function hexToRgb(hex: string) {
    const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
    return result ? [Number.parseInt(result[1], 16), Number.parseInt(result[2], 16), Number.parseInt(result[3], 16)] : null;
}

/**
 * Проверка на null и undefined
 * @param hex
 */
export function isNotNullable(data: unknown): boolean {
    if (data === null || data === undefined) return false;
    return true
}