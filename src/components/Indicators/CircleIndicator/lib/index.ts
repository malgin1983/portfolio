import * as d3 from 'd3';
import type { MutableRefObject } from 'react';
import { drawArc, drawLine, drawStar } from '../../IndicatorElements';
import { getFactPercent, getPlanPercent } from '../../RingIndicator/lib';
import { CIRCLE_COLORS } from '../constants';

export function getNeedSize(size: string): number {
    switch (size) {
        case 's':
            return 62;
        case 'l':
            return 116;
        case 'xl':
            return 151;
        default:
            return 62;
    }
}

export function percentToAngle(percent: number): number {
    return (360 / 100) * percent;
}

export function drawIndicator(
    max: number,
    min: number,
    plan: number,
    fact: number,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    size: 's' | 'l' | 'xl',
    isExecution: boolean,
    isStarEnabled: boolean,
): void {
    const planPercent = getPlanPercent((100 / (max - min)) * plan, 7);
    const factPercent = getFactPercent((100 / (max - min)) * fact, planPercent, 7);

    const factAngle = percentToAngle(factPercent);
    const planAngle = percentToAngle(planPercent);
    const starAngle = planAngle - 20;

    drawArc(svgRef.current, CIRCLE_COLORS.gray, CIRCLE_COLORS.gray, 0, 31, 0, 360, 31, 31);
    drawArc(svgRef.current, CIRCLE_COLORS.red, CIRCLE_COLORS.red, 0, 31, 0, planAngle, 31, 31);
    drawArc(svgRef.current, CIRCLE_COLORS.gradient1, CIRCLE_COLORS.gradient2, 0, 31, 0, factAngle, 31, 31);

    drawLine(
        svgRef.current,
        CIRCLE_COLORS.line,
        planAngle,
        size === 'l' ? 30 : size === 'xl' ? 31 : 25,
        31,
        size === 'l' ? 30 : size === 'xl' ? 30 : 27,
        0,
        31,
        31,
        size,
    );

    if (isStarEnabled) {
        drawStar(
            svgRef.current,
            isExecution ? CIRCLE_COLORS.star : 'none',
            CIRCLE_COLORS.star,
            size === 'l' ? starAngle + 5 : starAngle + 7,
            31,
            size === 'l' ? 6.5 : size === 'xl' ? 5.5 : 7.5,
            0,
            31,
            31,
            size,
        );
    }

    d3.select(svgRef.current)
        .append('circle')
        .attr('cx', '31')
        .attr('cy', '31')
        .attr('r', size === 'l' ? '1.5' : size === 'xl' ? '1.2' : '2.6')
        .attr('fill', CIRCLE_COLORS.line);
}
