import { useEffect, useRef } from 'react';
import { getFactPercent, getPlanPercent, percentToAngle } from '../lib';
import { drawArc, drawStar } from '../../IndicatorElements';
import { RING_COLORS } from '../constants';

interface IProps {
    isExecution: boolean;
    isStarEnabled: boolean;
    fact: number;
    plan: number;
    min?: number;
    max?: number;
    size: 's' | 'l' | 'xl';
}

export const RingIndicator = ({
    isExecution = false,
    fact,
    plan,
    min = 0,
    max = 100,
    size = 's',
    isStarEnabled,
}: IProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const planPercent = getPlanPercent((100 / (max - min)) * plan, size.toString() === 's' ? 9.375 : 6);
        const factPercent = getFactPercent((100 / (max - min)) * fact, planPercent, size.toString() === 's' ? 9.375 : 6);
        const factAngle = percentToAngle(factPercent);
        const planAngle = percentToAngle(planPercent);
        const starAngle = planAngle - 16;
        const ringRadius = size.toString() === 'xl' ? 22 : size.toString() === 'l' ? 22.5 : 18.7879;
        const starRadius = size.toString() === 'xl' ? 24 : size.toString() === 'l' ? 24 : 31;
        const starInner = size.toString() === 'xl' ? 24 : size.toString() === 'l' ? 22 : 31;

        drawArc(svgRef.current, RING_COLORS.gray, RING_COLORS.gray, ringRadius, 31, 0, 360, 31, 31);
        drawArc(svgRef.current, RING_COLORS.red, RING_COLORS.red, ringRadius, 31, 0, planAngle, 31, 31);
        drawArc(svgRef.current, RING_COLORS.gradient1, RING_COLORS.gradient2, ringRadius, 31, 0, factAngle, 31, 31);

        if (isStarEnabled) {
            drawStar(
                svgRef.current,
                isExecution ? RING_COLORS.star : 'none',
                RING_COLORS.star,
                starAngle,
                31,
                6.106_05,
                0,
                starRadius,
                starInner,
                size,
            );
        }
    }, []);

    const width = size.toString() === 'l' ? 116 : size.toString() === 'xl' ? 150 : 62;
    const height = width;

    return <svg ref={svgRef} viewBox="0 0 62 62" width={width} height={height} />;
};
