import { useEffect, useRef } from 'react';
import { getNeedSize, drawIndicator } from '../lib';

interface IProps {
    isExecution: boolean;
    isStarEnabled: boolean;
    fact: number;
    plan: number;
    min?: number;
    max?: number;
    size: 's' | 'l' | 'xl';
}

export const CircleIndicator = ({
    isExecution = false,
    fact,
    plan,
    min = 0,
    max = 100,
    size = 's',
    isStarEnabled,
}: IProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const chartSize = getNeedSize(size);

    useEffect(() => {
        drawIndicator(max, min ?? 0, plan, fact, svgRef, size, isExecution, isStarEnabled);
    }, []);

    return <svg ref={svgRef} viewBox="0 0 62 62" width={chartSize} height={chartSize} />;
};
