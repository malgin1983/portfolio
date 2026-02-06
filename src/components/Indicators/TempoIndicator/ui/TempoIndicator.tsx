import { useEffect, useRef } from 'react';
import { drawFactLine, drawLine, drawRect, drawStar, drawValue } from '../../IndicatorElements';
import { TEMPO_COLORS } from '../constants';
import { getNeedSize, percentToAngle } from '../lib';

interface IProps {
    isExecution: boolean;
    isStarEnabled: boolean;
    fact: number;
    plan: number;
    min?: number;
    max?: number;
    size: 's' | 'l' | 'xl';
    barFact: number;
    barPlan: number;
    isTempOk?: boolean;
    planMain1MonthQuarter?: number;
    planMain2MonthQuarter?: number;
}

export const TempoIndicator = ({
    isExecution = false,
    isStarEnabled,
    fact,
    plan,
    min = 0,
    max = 100,
    size = 's',
    barFact,
    barPlan,
    planMain1MonthQuarter = 0,
    planMain2MonthQuarter = 0,
    isTempOk,
}: IProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const chartSize = getNeedSize(size);

    const planMain1MonthQuarterCorrect = planMain1MonthQuarter > plan ? plan : planMain1MonthQuarter;
    const planMain2MonthQuarterCorrect = planMain2MonthQuarter > plan ? plan : planMain2MonthQuarter;

    useEffect(() => {
        const newMax = fact > max ? fact : max;
        const factPercent = (100 / (newMax - min)) * fact;
        const planPercent = (100 / (newMax - min)) * plan;

        const newPlanMain1MonthQuarter = (100 / (newMax - min)) * planMain1MonthQuarterCorrect;
        const newPlanMain2MonthQuarter = (100 / (newMax - min)) * planMain2MonthQuarterCorrect;

        const barPlanMain1MonthQuarter = (planMain1MonthQuarterCorrect * barPlan) / 100;
        const barPlanMain2MonthQuarter = (planMain2MonthQuarterCorrect * barPlan) / 100;

        const hide1MonthQuarter = fact < plan && barPlanMain1MonthQuarter < barPlan;
        const hide2MonthQuarter = fact < plan && barPlanMain2MonthQuarter < barPlan;

        const factLength = percentToAngle(factPercent);
        const planLength = percentToAngle(planPercent);
        const plan1MainLength = percentToAngle(newPlanMain1MonthQuarter);
        const plan2MainLength = percentToAngle(newPlanMain2MonthQuarter);
        const factStop = factLength <= 0 ? 1 : factLength;

        const colorGradient1 = isTempOk ? TEMPO_COLORS.gradientGood : TEMPO_COLORS.red;
        const colorGradient2 = isTempOk ? TEMPO_COLORS.teal : TEMPO_COLORS.red;
        const gradientId = isTempOk ? '-tempo-good' : '-tempo-bad';

        const indicatorBigSize = size.toString() === 'l' || size.toString() === 'xl';

        indicatorBigSize &&
            drawValue(
                svgRef.current,
                barFact?.toString().length < 5 ? -18 : -23,
                58 - factLength,
                barFact,
                'var(--color-gray900)',
            );
        indicatorBigSize && drawValue(svgRef.current, 70, 56 - planLength, barPlan);
        hide1MonthQuarter &&
            indicatorBigSize &&
            drawValue(svgRef.current, 70, 56 - plan1MainLength, barPlanMain1MonthQuarter);
        hide2MonthQuarter &&
            indicatorBigSize &&
            drawValue(svgRef.current, 70, 56 - plan2MainLength, barPlanMain2MonthQuarter);

        drawRect(svgRef.current, TEMPO_COLORS.gray, TEMPO_COLORS.gray, 56, 56, 0, 0, -90, 28, 28, size, gradientId);
        drawRect(svgRef.current, colorGradient1, colorGradient2, factLength, 56, 0, 0, -90, 28, 28, size, gradientId);

        indicatorBigSize && drawFactLine(svgRef.current, TEMPO_COLORS.factLine, 0, 56, 0, 56 - factStop, 90, 0, 56 - factStop);

        drawLine(
            svgRef.current,
            TEMPO_COLORS.line,
            0,
            indicatorBigSize ? 71 : 56,
            0,
            56 - planLength,
            90,
            0,
            56 - planLength,
            size,
        );

        fact < plan &&
            drawLine(
                svgRef.current,
                TEMPO_COLORS.line,
                0,
                indicatorBigSize ? 71 : 56,
                0,
                56 - plan1MainLength,
                90,
                0,
                56 - plan1MainLength,
                size,
            );

        fact < plan &&
            drawLine(
                svgRef.current,
                TEMPO_COLORS.line,
                0,
                indicatorBigSize ? 71 : 56,
                0,
                56 - plan2MainLength,
                90,
                0,
                56 - plan2MainLength,
                size,
            );

        const starStop = planLength <= 12 ? 12 : planLength >= 58 ? 58 : planLength;
        if (isStarEnabled) {
            drawStar(
                svgRef.current,
                isExecution ? TEMPO_COLORS.star : 'none',
                TEMPO_COLORS.star,
                0,
                indicatorBigSize ? 33 : 28,
                56 - starStop + 5,
                0,
                0,
                0,
                size,
            );
        }
    }, []);

    let allSizes = { viewBox: '0 0 56 56', width: chartSize, height: chartSize };
    if (size.toString() === 'l') allSizes = { viewBox: '0 -8 64 64', width: 190, height: 108 };
    if (size.toString() === 'xl') allSizes = { viewBox: '0 -6 65 65', width: 227, height: 146 };

    return <svg ref={svgRef} viewBox={allSizes.viewBox} width={allSizes.width} height={allSizes.height} />;
};
