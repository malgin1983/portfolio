import * as d3 from 'd3';
import { WIDGET_INDICATOR_TYPES } from '../../indicator/constants';
import { getStepColor, hexToRgb, rgbToHex } from '../../RingIndicator/lib';

export function drawRect(
    svgRef: SVGSVGElement | null,
    color1: string,
    color2: string,
    width: number,
    height: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
    size: string,
    type: string,
) {
    const svg = d3.select(svgRef).append('g');
    const rect =
        size.toString() === 'l' || size.toString() === 'xl'
            ? svg.attr('style', 'transform: scaleX(1.16)').append('rect')
            : svg.append('rect');
    rect.attr('fill', `url(#mainGradient${type})`)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height)
        .attr(
            'transform',
            'rotate(' + rotateAngle + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
        );

    if (color1 == color2) {
        rect.attr('fill', color1);
    } else {
        const mainGradient = svg.append('defs').append('linearGradient').attr('id', `mainGradient${type}`);
        mainGradient.append('stop').attr('class', 'stop-left').attr('stop-color', color1).attr('offset', '0%');
        mainGradient.append('stop').attr('class', 'stop-right').attr('stop-color', color2).attr('offset', '100%');
    }
}

export function drawArc(
    svgRef: SVGSVGElement | null,
    color1: string,
    color2: string,
    innerRadius: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
) {
    const pi = Math.PI,
        start = (startAngle * pi) / 180,
        end = (endAngle * pi) / 180,
        n = color1 === color2 ? 1 : Math.floor((50 / pi) * (end - start));

    const arcGen = d3
        .arc<SVGPathElement, number>()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle((d) => d)
        .endAngle((d) => d + ((end - start) / n) * (n === 1 ? 1 : 1.1));

    d3.select(svgRef)
        .append('g')
        .attr(
            'transform',
            'rotate(' + rotateAngle + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
        )
        .selectAll<SVGPathElement, number>('path')
        .data(d3.range(start, end, (end - start) / n))
        .enter()
        .append('path')
        .attr('d', arcGen)
        .style('fill', function (_d, index) {
            const rgb = hexToRgb(color1);
            const rgb2 = hexToRgb(color2);
            if (!rgb || !rgb2) return color1;
            const color = getStepColor(rgb, rgb2, (100 / n) * index);
            return rgbToHex(color[0], color[1], color[2]);
        });
}

export function drawArrow(
    svgRef: SVGSVGElement | null,
    fill: string,
    angle: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
) {
    d3.select(svgRef)
        .append('path')
        .attr('d', 'm -3 0 l 2.5 -14 a 0.5 0.5 0 1 1 1 0 l 2.5 14 a 3 3 0 1 1 -6 0 z')
        .attr('fill', fill)
        .attr(
            'transform',
            'rotate(' + (rotateAngle + angle) + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
        );
}

export function drawStar(
    svgRef: SVGSVGElement | null,
    fill: string,
    stroke: string,
    angle: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
    size: string,
) {
    d3.select(svgRef)
        .append('g')
        .attr(
            'transform',
            size.toString() === 'l'
                ? 'rotate(' +
                  (rotateAngle + angle) +
                  ', ' +
                  rotateX +
                  ',' +
                  rotateY +
                  ') translate(' +
                  x +
                  ',' +
                  y +
                  ') scale (0.75)'
                : size.toString() === 'xl'
                  ? 'rotate(' +
                    (rotateAngle + angle) +
                    ', ' +
                    rotateX +
                    ',' +
                    rotateY +
                    ') translate(' +
                    x +
                    ',' +
                    y +
                    ') scale (0.85)'
                  : 'rotate(' +
                    (rotateAngle + angle) +
                    ', ' +
                    rotateX +
                    ',' +
                    rotateY +
                    ') translate(' +
                    x +
                    ',' +
                    y +
                    ')',
        )
        .append('path')
        .attr(
            'd',
            'm 0.1 -3.75 l 0.68 2.01 c 0.15 0.45 0.57 0.75 1.05 0.75 h 2.11 c 0.03 0 0.05 0.01 0.05 0.02 c 0.01 0.01 0.02 0.02 0.03 0.05 c 0.01 0.02 0.01 0.04 0 0.06 c 0 0.01 -0.01 0.03 -0.03 0.04 l -1.69 1.24 c -0.38 0.28 -0.53 0.77 -0.38 1.22 l 0.68 2.01 c 0.01 0.03 0.01 0.05 0 0.06 c 0 0.01 -0.02 0.03 -0.03 0.04 c -0.02 0.01 -0.04 0.02 -0.05 0.02 c -0.01 0 -0.03 0 -0.05 -0.02 l -1.73 -1.24 c -0.39 -0.28 -0.9 -0.28 -1.28 0 l -1.69 1.24 c -0.03 0.02 -0.04 0.02 -0.05 0.02 c -0.01 0 -0.03 -0.01 -0.05 -0.02 c -0.02 -0.01 -0.03 -0.03 -0.04 -0.04 c 0 -0.01 -0.01 -0.03 0 -0.06 l 0.63 -2.01 c 0.14 -0.45 -0.03 -0.94 -0.41 -1.22 l -1.73 -1.24 c -0.03 -0.02 -0.03 -0.03 -0.04 -0.04 c 0 -0.01 -0.01 -0.03 0 -0.06 c 0.01 -0.02 0.02 -0.04 0.03 -0.05 c 0.01 -0.01 0.02 -0.02 0.05 -0.02 h 2.11 c 0.47 0 0.89 -0.3 1.03 -0.75 l 0.63 -2.01 c 0.01 -0.03 0.02 -0.04 0.03 -0.05 c 0.01 -0.01 0.03 -0.02 0.05 -0.02 c 0.02 0 0.04 0.01 0.06 0.02 c 0.01 0.01 0.02 0.02 0.03 0.05 z',
        )
        .attr('fill', fill)
        .attr('stroke', stroke)
        .attr('stroke-width', size.toString() === 'xl' ? '0.6' : '1')
        .attr('transform', 'rotate(' + -(rotateAngle + angle) + ', 0, 0)');
}

export function drawLine(
    svgRef: SVGSVGElement | null,
    stroke: string,
    angle: number,
    length: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
    size: string,
) {
    if (size.toString() === 'l' || size.toString() === 'xl') {
        d3.select(svgRef)
            .append('path')
            .attr('d', 'm 0 0 l 0 -' + (length - 1))
            .attr('stroke', stroke)
            .attr('stroke-dasharray', '1.7')
            .attr('stroke-width', '0.5')
            .attr(
                'transform',
                'rotate(' + (rotateAngle + angle) + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
            );
    } else {
        d3.select(svgRef)
            .append('path')
            .attr('d', 'm 0 0 l 0 -' + length)
            .attr('stroke', stroke)
            .attr('stroke-linecap', 'round')
            .attr('stroke-dasharray', '3')
            .attr(
                'transform',
                'rotate(' + (rotateAngle + angle) + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
            );
    }
}

export function drawFactLine(
    svgRef: SVGSVGElement | null,
    stroke: string,
    angle: number,
    _length: number,
    x = 0,
    y = 0,
    rotateAngle = 0,
    rotateX = 0,
    rotateY = 0,
) {
    d3.select(svgRef)
        .append('path')
        .attr('d', 'm 0.5 0 l 0 5')
        .attr('stroke', stroke)
        .attr(
            'transform',
            'rotate(' + (rotateAngle + angle) + ', ' + rotateX + ',' + rotateY + ') translate(' + x + ',' + y + ')',
        );
}

export function drawValue(svgRef: SVGSVGElement | null, x = 0, y = 0, value: number, color?: string) {
    d3.select(svgRef)
        .append('text')
        .style('fill', color ?? 'var(--color-gray600)')
        .style('font-size', '7px')
        .style('font-family', 'var(--font-family-sber-sans-text-regular)')
        .text(value)
        .attr('transform', 'translate(' + x + ',' + y + ')');
}

export function drawArcValue(svgRef: SVGSVGElement | null, amount: number, maxValue: number, type: string) {
    const anglesData: number[] = [];
    const valuesData: (string | number)[] = [];
    const isSpeedometerTypeTwo = ['speedometerType_2', WIDGET_INDICATOR_TYPES.ARC_REVERSE].includes(type);
    for (let i = 0; i <= amount; i++) {
        const angles = isSpeedometerTypeTwo ? (135 / amount) * i : (180 / amount) * i;
        const toFixedWithoutZeros = (num: number): string => `${1 * Number(num.toFixed(1))}`;
        const values =
            maxValue <= 5 ? toFixedWithoutZeros((maxValue / amount) * i) : Math.round((maxValue / amount) * i);
        valuesData.push(values);
        anglesData.push(angles);
    }
    const angleToCoordinates = (deg: number, center: [number, number], radius: number): [number, number] => {
        const deg2rad = Math.PI / 180;
        const px = center[0] + radius * Math.cos(deg * deg2rad + Math.PI);
        const py = center[1] + radius * Math.sin(deg * deg2rad + Math.PI);
        return [Math.round(px), Math.round(py)];
    };
    for (const [index, angle] of anglesData.entries()) {
        const value = typeof valuesData[index] === 'number' && isNaN(valuesData[index] as number) ? '' : valuesData[index];
        const results = angleToCoordinates(angle, [32, 19], 40);
        d3.select(svgRef)
            .append('text')
            .style('fill', 'var(--color-gray600)')
            .style('font-size', '6px')
            .style('font-family', 'var(--font-family-sber-sans-display-regular)')
            .text(String(value))
            .attr('transform', 'translate(' + String(results[0]) + ',' + String(results[1]) + ')');
    }
    if (isSpeedometerTypeTwo) {
        d3.select(svgRef)
            .append('text')
            .style('fill', 'var(--color-gray600)')
            .style('font-size', '6px')
            .style('font-family', 'var(--font-family-sber-sans-display-regular)')
            .text('>')
            .attr('transform', 'translate(74,19)');
    }
}
