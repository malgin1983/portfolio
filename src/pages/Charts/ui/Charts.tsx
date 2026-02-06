import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { BAR_DATA, LINE_DATA, DONUT_DATA } from '../../../lib';
import './Charts.css';

function BarChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 400;
    const height = 220;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', 'auto');

    const xScale = d3
      .scaleBand()
      .domain(BAR_DATA.map((d) => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const maxVal = Math.max(...BAR_DATA.flatMap((d) => [d.plan, d.fact]));
    const yScale = d3
      .scaleLinear()
      .domain([0, maxVal * 1.1])
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .style('fill', 'var(--color-text-muted)')
      .style('font-size', '12px');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .selectAll('text')
      .style('fill', 'var(--color-text-muted)')
      .style('font-size', '12px');

    const planBars = svg
      .selectAll('.bar-plan')
      .data(BAR_DATA)
      .enter()
      .append('rect')
      .attr('class', 'bar-plan')
      .attr('x', (d) => (xScale(d.label) ?? 0) + xScale.bandwidth() / 4)
      .attr('y', (d) => yScale(d.plan))
      .attr('width', xScale.bandwidth() / 4 - 2)
      .attr('height', (d) => height - margin.bottom - yScale(d.plan))
      .attr('fill', '#EF877C')
      .attr('rx', 2);

    const factBars = svg
      .selectAll('.bar-fact')
      .data(BAR_DATA)
      .enter()
      .append('rect')
      .attr('class', 'bar-fact')
      .attr('x', (d) => (xScale(d.label) ?? 0) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.fact))
      .attr('width', xScale.bandwidth() / 4 - 2)
      .attr('height', (d) => height - margin.bottom - yScale(d.fact))
      .attr('fill', 'url(#barGradient)')
      .attr('rx', 2);

    svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'barGradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', height)
      .attr('x2', 0)
      .attr('y2', 0)
      .selectAll('stop')
      .data([
        { offset: '0%', color: '#94a3b8' },
        { offset: '100%', color: '#475569' },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    planBars
      .transition()
      .duration(800)
      .attr('y', (d) => yScale(d.plan))
      .attr('height', (d) => height - margin.bottom - yScale(d.plan));

    factBars
      .transition()
      .duration(800)
      .delay(100)
      .attr('y', (d) => yScale(d.fact))
      .attr('height', (d) => height - margin.bottom - yScale(d.fact));

    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, []);

  return (
    <div className="charts__card">
      <h3>План vs Факт (колонки)</h3>
      <svg ref={svgRef} className="charts__svg" />
      <div className="charts__legend">
        <span className="charts__legend-item charts__legend--plan">План</span>
        <span className="charts__legend-item charts__legend--fact">Факт</span>
      </div>
    </div>
  );
}

function LineChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 400;
    const height = 220;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', 'auto');

    const xScale = d3
      .scalePoint()
      .domain(LINE_DATA.map((d) => d.month))
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(LINE_DATA, (d) => d.value)! * 1.2])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<{ month: string; value: number }>()
      .x((d) => xScale(d.month)!)
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .style('fill', 'var(--color-text-muted)')
      .style('font-size', '12px');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .selectAll('text')
      .style('fill', 'var(--color-text-muted)')
      .style('font-size', '12px');

    const path = svg
      .append('path')
      .datum([...LINE_DATA])
      .attr('fill', 'none')
      .attr('stroke', 'url(#lineGradient)')
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('d', line);

    const totalLength = (path.node() as SVGPathElement).getTotalLength();
    path
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(1000)
      .attr('stroke-dashoffset', 0);

    svg
      .selectAll('.dot')
      .data(LINE_DATA)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.month)!)
      .attr('cy', (d) => yScale(d.value))
      .attr('r', 4)
      .attr('fill', '#475569')
      .attr('opacity', 0)
      .transition()
      .duration(500)
      .delay(1000)
      .attr('opacity', 1);

    svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'lineGradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', margin.left)
      .attr('y1', 0)
      .attr('x2', width - margin.right)
      .attr('y2', 0)
      .selectAll('stop')
      .data([
        { offset: '0%', color: '#94a3b8' },
        { offset: '100%', color: '#475569' },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, []);

  return (
    <div className="charts__card">
      <h3>Динамика показателей</h3>
      <svg ref={svgRef} className="charts__svg" />
    </div>
  );
}

function DonutChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 280;
    const height = 220;
    const radius = Math.min(width, height) / 2 - 40;

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', 'auto');

    const colorScale = d3.scaleOrdinal<string>().domain(DONUT_DATA.map((d) => d.label)).range([
      '#475569',
      '#64748b',
      '#94a3b8',
      '#64748b',
    ]);

    const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value).sort(null);
    const arc = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);
    const donutDataArray = [...DONUT_DATA];

    svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .selectAll('path')
      .data(pie(donutDataArray))
      .enter()
      .append('path')
      .attr('fill', (d) => colorScale(d.data.label))
      .attr('stroke', 'var(--color-bg)')
      .attr('stroke-width', 2)
      .attr('d', arc)
      .attr('opacity', 0)
      .transition()
      .duration(600)
      .delay((_, i) => i * 150)
      .attr('opacity', 1);

    const labelArc = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(radius * 0.75)
      .outerRadius(radius * 0.75);

    svg
      .select('g')
      .selectAll('.donut-label')
      .data(pie(donutDataArray))
      .enter()
      .append('text')
      .attr('class', 'donut-label')
      .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('fill', 'var(--color-text)')
      .style('font-size', '11px')
      .style('opacity', 0)
      .text((d) => `${d.data.value}%`)
      .transition()
      .duration(400)
      .delay(800)
      .style('opacity', 1);

    const legend = svg
      .append('g')
      .attr('transform', `translate(${width - 100}, 20)`);

    DONUT_DATA.forEach((d, i) => {
      const g = legend.append('g').attr('transform', `translate(0, ${i * 22})`);
      g.append('rect').attr('width', 12).attr('height', 12).attr('fill', colorScale(d.label)).attr('rx', 2);
      g.append('text')
        .attr('x', 18)
        .attr('y', 10)
        .style('fill', 'var(--color-text-muted)')
        .style('font-size', '11px')
        .text(d.label);
    });

    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, []);

  return (
    <div className="charts__card">
      <h3>Стек технологий</h3>
      <svg ref={svgRef} className="charts__svg charts__svg--donut" />
    </div>
  );
}

const CHART_COMPONENTS = [
  { id: 'bar', Component: BarChart },
  { id: 'line', Component: LineChart },
  { id: 'donut', Component: DonutChart },
] as const;

export function Charts() {
  return (
    <div className="charts">
      <h1 className="charts__title">Графики и визуализации</h1>
      <p className="charts__intro">
        D3.js визуализации из проекта индикаторов (SmartMove, Сбер)
      </p>
      <div className="charts__grid">
        {CHART_COMPONENTS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </div>
  );
}
