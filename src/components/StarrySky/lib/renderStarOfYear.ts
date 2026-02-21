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

const STAR_IMAGE_WIDTH = 148;
const STAR_IMAGE_HEIGHT = 152;

export const renderStarOfYear = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    type: number,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    drawLines: boolean,
    coordinatesLine: Array<IStarData>,
    handleClickStar: () => void,
    options?: { centerImage?: boolean; imageWidth?: number; imageHeight?: number },
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
        const imgW = options?.imageWidth ?? STAR_IMAGE_WIDTH;
        const imgH = options?.imageHeight ?? STAR_IMAGE_HEIGHT;
        const rx = xScale.range();
        const ry = yScale.range();
        const centerX = (rx[0] + rx[1]) / 2;
        const centerY = (ry[0] + ry[1]) / 2;
        const x = options?.centerImage ? centerX - imgW / 2 : xScale(star.x);
        const y = options?.centerImage ? centerY - imgH / 2 : yScale(star.y);

        svg.append('svg:image')
            .attr('xlink:href', url)
            .attr('x', x)
            .attr('y', y)
            .attr('width', imgW)
            .attr('height', imgH)
            .attr('cursor', 'pointer')
            .on('click', () => handleClickStar());
    }
};