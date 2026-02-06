import { SIZE_WIDTH } from '../constants';

export function guardPlanAndFact(plan: number, fact: number): number {
    if (plan === 0 && fact === 0) return plan;
    if (plan === 0 && fact > 0) return fact;
    return plan;
}

export function percentToAngle(percent: number): number {
    return (180 / 100) * percent;
}

export function getSizeWidth(size: 's' | 'l' | 'xl'): number {
    return SIZE_WIDTH[size];
}
