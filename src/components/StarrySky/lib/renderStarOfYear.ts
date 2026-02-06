import type { ScaleLinear } from 'd3-scale';
import type { Selection } from 'd3-selection';
import type { IStarData } from '../types';
import { STARRY_SKY_YEAR_STAR_URLS } from '../constants';

const lineCoordinates: Array<Array<number>> = [
    [15, 21],
    [21, 42],
    [41, 35],
    [34, 15],
];

export const renderStarOfYear = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    type: number,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    drawLines: boolean,
    coordinatesLine: Array<IStarData>,
    handleClickStar: () => void,
) => {
    const star = { x: 400, y: 350 };
    /** Отрисовка линий */
    if (drawLines) {
        lineCoordinates.forEach(([a, b]) => {
            const P1 = coordinatesLine.find(el => el.id === a);
            const P2 = coordinatesLine.find(el => el.id === b);
            if (!P1 || !P2) return;
            svg.append('g')
                .append('line')
                .attr('x1', xScale(P1.x))
                .attr('x2', xScale(P2.x))
                .attr('y1', yScale(P1.y))
                .attr('y2', yScale(P2.y))
                .attr('stroke-width', 1)
                .attr('stroke', '#FFFFFF');
        });
    }

    const url = STARRY_SKY_YEAR_STAR_URLS[type];
    if (url) {
        svg.append('svg:image')
            .attr('xlink:href', url)
            .attr('x', xScale(star.x))
            .attr('y', yScale(star.y))
            .attr('cursor', 'pointer')
            .on('click', () => handleClickStar());
    }
};