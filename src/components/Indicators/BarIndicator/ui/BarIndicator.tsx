import { useEffect, useRef } from 'react';
import { getFactPercent, getPlanPercent } from '../../RingIndicator/lib';
import { drawFactLine, drawLine, drawRect, drawStar, drawValue } from '../../IndicatorElements';
import { BAR_COLORS, BAR_WIDTH } from '../constants';
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
    valueFactColor?: string;
}

export const BarIndicator = ({
    isExecution = false,
    isStarEnabled,
    fact,
    plan,
    min = 0,
    max = 100,
    size = 's',
    barFact,
    barPlan,
    valueFactColor = '',
}: IProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const chartSize = getNeedSize(size);

    useEffect(() => {
        const newMax = Math.max(plan, fact, max ?? 100);
        const planPercent = getPlanPercent((100 / (newMax - (min ?? 0))) * plan, 22);
        const factPercent = getFactPercent((100 / (newMax - (min ?? 0))) * fact, planPercent, 17);

        const factLength = percentToAngle(factPercent);
        const planLength = percentToAngle(planPercent);
        const factStop = factLength <= 0 ? 1 : factLength;

        const indicatorBigSize = size.toString() === 'l' || size.toString() === 'xl';

        if (indicatorBigSize) {
            drawValue(
                svgRef.current,
                barFact?.toString().length < 5 ? -18 : -23,
                57 - factStop,
                barFact,
                valueFactColor,
            );
            drawValue(svgRef.current, 70, 56 - planLength, barPlan);
        }

        drawRect(svgRef.current, BAR_COLORS.gray, BAR_COLORS.gray, 56, BAR_WIDTH, 0, 0, -90, 28, 28, size, '-bar');
        drawRect(svgRef.current, BAR_COLORS.red, BAR_COLORS.red, planLength, BAR_WIDTH, 0, 0, -90, 28, 28, size, '-bar');
        drawRect(
            svgRef.current,
            BAR_COLORS.gradient1,
            BAR_COLORS.gradient2,
            factLength,
            BAR_WIDTH,
            0,
            0,
            -90,
            28,
            28,
            size,
            '-bar',
        );

        indicatorBigSize && drawFactLine(svgRef.current, BAR_COLORS.factLine, 0, 56, 0, 56 - factStop, 90, 0, 56 - factStop);

        drawLine(
            svgRef.current,
            BAR_COLORS.line,
            0,
            indicatorBigSize ? 71 : 50,
            0,
            56 - planLength,
            90,
            0,
            56 - planLength,
            size,
        );

        const starStop = planLength <= 12 ? 12 : planLength >= 58 ? 58 : planLength;
        if (isStarEnabled) {
            drawStar(
                svgRef.current,
                isExecution ? BAR_COLORS.star : 'none',
                BAR_COLORS.star,
                0,
                indicatorBigSize ? 30 : 26,
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
    if (size.toString() === 'xl') allSizes = { viewBox: '0 -6 65 65', width: barFact?.toString().length > 3 ? 248 : 227, height: 146 };

    return <svg ref={svgRef} viewBox={allSizes.viewBox} width={allSizes.width} height={allSizes.height} />;
};
