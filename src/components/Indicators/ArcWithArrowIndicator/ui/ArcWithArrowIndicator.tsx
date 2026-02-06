import { useEffect, useRef } from 'react';
import {
    drawArc,
    drawArcValue,
    drawArrow,
    drawLine,
    drawStar,
} from '../../IndicatorElements';
import { getFactPercent, getPlanPercent } from '../../RingIndicator/lib';
import { isNotNullable } from '../../lib';
import { ARC_COLORS, SPEEDOMETER_TYPE_BOOLEAN, SPEEDOMETER_TYPE_FORWARD, SPEEDOMETER_TYPE_REVERSE } from '../constants';
import { getSizeWidth, guardPlanAndFact, percentToAngle } from '../lib';

export interface ArcWithArrowIndicatorProps {
    type?: string;
    isExecution: boolean;
    isStarEnabled: boolean;
    fact?: number;
    plan?: number;
    min?: number;
    max?: number;
    size: 's' | 'l' | 'xl';
}

/** Компонент инфографики в виде спидометра (арка + стрелка, опционально звезда). */
export function ArcWithArrowIndicator({
    type,
    isExecution = false,
    fact,
    plan,
    min = 0,
    max = 100,
    size = 's',
    isStarEnabled,
}: ArcWithArrowIndicatorProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const typeStr = type ?? '';
    const isSpeedometerTypeOne = SPEEDOMETER_TYPE_FORWARD.includes(typeStr);
    const isSpeedometerTypeTwo = SPEEDOMETER_TYPE_REVERSE.includes(typeStr);
    const isSpeedometerTypeThree = SPEEDOMETER_TYPE_BOOLEAN.includes(typeStr);

    useEffect(() => {
        const svgEl = svgRef.current;
        if (!svgEl) return;

        const planVal = plan ?? 0;
        const factVal = fact ?? 0;
        let factPercent = 0;
        let planPercent = 0;
        let factAngle = 0;
        let planAngle = 0;
        let starAngle = 0;

        drawArc(svgEl, ARC_COLORS.gray, ARC_COLORS.gray, 20, 35, 0, 180, 35, 19, -90, 35, 19);

        switch (type) {
            case 'ARC_FORWARD':
            case 'speedometerType_1': {
                planPercent = getPlanPercent((100 / (max - min)) * planVal, 15);
                factPercent = getFactPercent((100 / (max - min)) * factVal, planPercent, 15);
                factAngle = percentToAngle(factPercent);
                planAngle = percentToAngle(planPercent);
                starAngle = planAngle - 16;

                const planAngleStop = planAngle >= 180 ? 180 : planAngle;
                drawArc(svgEl, ARC_COLORS.red, ARC_COLORS.red, 20, 35, 0, planAngleStop, 35, 19, -90, 35, 19);
                const factAngleStop = factAngle >= 180 ? 180 : factAngle;
                drawArc(
                    svgEl,
                    ARC_COLORS.gradient1,
                    ARC_COLORS.gradient2,
                    20,
                    35,
                    0,
                    factAngleStop,
                    35,
                    19,
                    -90,
                    35,
                    19,
                );
                break;
            }

            case 'ARC_REVERSE':
            case 'speedometerType_2': {
                factPercent = (100 / (max - min)) * factVal;
                planPercent = (100 / (max - min)) * planVal;
                factAngle = percentToAngle(factPercent);
                planAngle = percentToAngle(planPercent) >= 180 ? 180 : percentToAngle(planPercent);
                starAngle = 16;
                planAngle <= factAngle &&
                    drawArc(svgEl, ARC_COLORS.red, ARC_COLORS.red, 20, 35, planAngle, 180, 35, 19, -90, 35, 19);
                planAngle > factAngle &&
                    drawArc(svgEl, ARC_COLORS.gradient2, ARC_COLORS.gradient1, 20, 35, 0, planAngle, 35, 19, -90, 35, 19);
                break;
            }

            case 'ARC_BOOLEAN':
            case 'speedometerType_3': {
                starAngle = 45;
                factAngle = isExecution ? 45 : 180 - 45;

                !isExecution && drawArc(svgEl, ARC_COLORS.red, ARC_COLORS.red, 20, 35, 90, 180, 35, 19, -90, 35, 19);
                isExecution &&
                    drawArc(svgEl, ARC_COLORS.gradient2, ARC_COLORS.gradient1, 20, 35, 0, 90, 35, 19, -90, 35, 19);
                break;
            }
        }

        const planAngleStop = planAngle >= 180 ? 180 : planAngle;
        type !== 'ARC_BOOLEAN' &&
            type !== 'speedometerType_3' &&
            drawLine(
                svgEl,
                ARC_COLORS.line,
                isNotNullable(planAngle) && !isNaN(planAngle) ? planAngleStop : 0,
                35,
                35,
                17,
                -90,
                35,
                19,
                size,
            );

        if (isStarEnabled) {
            drawStar(
                svgEl,
                isExecution ? ARC_COLORS.star : 'none',
                ARC_COLORS.star,
                starAngle <= 10 ? 10 : starAngle >= 170 ? 170 : starAngle,
                35,
                -8.5,
                -90,
                35,
                19,
                size,
            );
        }

        const factAngleStop = factAngle >= 180 ? 180 : factAngle;
        drawArrow(
            svgEl,
            ARC_COLORS.arrow,
            isNotNullable(factAngle) && !isNaN(factAngle) ? factAngleStop : 0,
            35,
            19,
            -90,
            35,
            19,
        );
        (size.toString() === 'l' || size.toString() === 'xl') &&
            !isSpeedometerTypeThree &&
            drawArcValue(
                svgEl,
                isSpeedometerTypeOne ? (max >= 10 ? 10 : max) : isSpeedometerTypeTwo ? 4 : 3,
                isSpeedometerTypeOne ? max : Math.ceil(guardPlanAndFact(planVal, factVal)),
                typeStr,
            );
    }, [type, fact, plan, min, max, size, isStarEnabled, isExecution, isSpeedometerTypeOne, isSpeedometerTypeTwo, isSpeedometerTypeThree]);

    const viewBox = size === 'l' || size === 'xl' ? '0 -23 72 58' : '0 0 70 19';

    return (
        <svg
            ref={svgRef}
            viewBox={viewBox}
            width={getSizeWidth(size)}
            height={size === 'l' || size === 'xl' ? 116 : 38}
        />
    );
}
