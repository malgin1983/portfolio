/**
 * Кэш компонента мобильного графика Starry Sky.
 * При восстановлении: скопировать в src/components/StarrySky/ui/StarrySkyMobile.tsx.
 * Импорт мобильных констант — только из constants/mobile.ts (MOBILE_REGION_BOUNDS, MOBILE_GAP).
 * Остальные импорты — из общих constants и lib (не мобильные).
 */

import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import type { IStarrySkyMainChart, StarDataQuarter, StarrySkyQuarterAchievement, StarrySkyQuarterStar } from '../types';
import { filteredAchievementsByEducation, getCountDiplom, translateSizeBlock } from '../lib';
import { renderStarOfYear } from '../lib/renderStarOfYear';
import {
    coordinatesLine,
    STARRY_SKY_QUORTERS,
    starrySkyQuarters,
    STARS_COORDINATES_Q1_TEMPLATE,
    STARS_COORDINATES_Q2_TEMPLATE,
    STARS_COORDINATES_Q3_TEMPLATE,
    STARS_COORDINATES_Q4_TEMPLATE,
} from '../constants';
import { MOBILE_REGION_BOUNDS, MOBILE_GAP } from './constants';
import { renderFirstQuarter } from '../lib/renderFirstQuarter';
import { renderSecondQuarter } from '../lib/renderSecondQuarter';
import { renderThirdQuarter } from '../lib/renderThirdQuarter';
import { renderFourQuarter } from '../lib/renderFourQuarter';

const MOBILE_DRAW_LINES = false;

export const StarrySkyMobileChart: React.FC<IStarrySkyMainChart> = ({ dimensions, targetYear }) => {
    const isPriorityShowEducation = true;
    const svg1Ref = useRef<SVGSVGElement>(null);
    const svg2Ref = useRef<SVGSVGElement>(null);
    const svgStarRef = useRef<SVGSVGElement>(null);
    const svg3Ref = useRef<SVGSVGElement>(null);
    const svg4Ref = useRef<SVGSVGElement>(null);

    const { width, height } = dimensions;
    const MOBILE_SECTION_HEIGHT = (height - 4 * MOBILE_GAP) / 5;
    const sizeWindow = translateSizeBlock(width);

    const today = new Date();
    const targetQuarter = Math.floor((today.getMonth() + 3) / 3);
    const activeQuarter = starrySkyQuarters?.yearStar?.brightLevel;
    const quartersData = starrySkyQuarters?.quarters;
    const isLastYearTarget = targetYear !== today.getFullYear();

    const firstQuarterData = quartersData?.filter((d) => d?.quarter === 1)[0];
    const firstQuarterStars = firstQuarterData?.elements?.quarterStars;
    const firstQuarterAchievements =
        firstQuarterData?.elements?.achievements?.length
            ? filteredAchievementsByEducation(
                  firstQuarterData.elements.achievements as StarrySkyQuarterAchievement[],
                  isPriorityShowEducation,
              )
            : [];
    const diplomCountFirstQuarter = useMemo(
        () => getCountDiplom(firstQuarterAchievements),
        [firstQuarterAchievements],
    );

    const secondQuarterData = quartersData?.filter((d) => d?.quarter === 2)[0];
    const secondQuarterStars = secondQuarterData?.elements?.quarterStars;
    const secondQuarterAchievements =
        secondQuarterData?.elements?.achievements?.length
            ? filteredAchievementsByEducation(
                  secondQuarterData.elements.achievements as StarrySkyQuarterAchievement[],
                  isPriorityShowEducation,
              )
            : [];
    const diplomCountSecondQuarter = useMemo(
        () => getCountDiplom(secondQuarterAchievements),
        [secondQuarterAchievements],
    );

    const thirdQuarterData = quartersData?.filter((d) => d?.quarter === 3)[0];
    const thirdQuarterStars = thirdQuarterData?.elements?.quarterStars;
    const thirdQuarterAchievements =
        thirdQuarterData?.elements?.achievements?.length
            ? filteredAchievementsByEducation(
                  thirdQuarterData.elements.achievements as StarrySkyQuarterAchievement[],
                  isPriorityShowEducation,
              )
            : [];
    const diplomCountThirdQuarter = useMemo(
        () => getCountDiplom(thirdQuarterAchievements),
        [thirdQuarterAchievements],
    );

    const fourQuarterData = quartersData?.filter((d) => d?.quarter === 4)[0];
    const fourQuarterStars = fourQuarterData?.elements?.quarterStars;
    const fourQuarterAchievements =
        fourQuarterData?.elements?.achievements?.length
            ? filteredAchievementsByEducation(
                  fourQuarterData.elements.achievements as StarrySkyQuarterAchievement[],
                  isPriorityShowEducation,
              )
            : [];
    const diplomCountFourQuarter = useMemo(
        () => getCountDiplom(fourQuarterAchievements),
        [fourQuarterAchievements],
    );

    const handleClickStar = (): void => {};
    const handleClickCentralStar = () => {};
    const handleClickModalOpen = (_type: string, _quarter: number): void => {};
    const goToPage = (
        _url?: string,
        _params?: Record<string, string | number>,
        _writeHistory?: boolean,
        _deleteParams?: string[],
    ) => {
        console.log('Go to page');
    };

    const refactorStars = (
        templateStars: Array<StarDataQuarter>,
        d: Array<StarrySkyQuarterStar> | null,
    ): Array<StarDataQuarter> => {
        if (!d?.length) return templateStars;
        return templateStars?.map((star, idx) => ({
            ...star,
            type: d[idx]?.isBright ? 'active' : 'base',
            id: d[idx]?.coordinates ?? star.id,
            tooltip: d[idx]?.tooltip,
        }));
    };

    useEffect(() => {
        if (!starrySkyQuarters) return;

        const b1 = MOBILE_REGION_BOUNDS.q1;
        const b2 = MOBILE_REGION_BOUNDS.q2;
        const bStar = MOBILE_REGION_BOUNDS.star;
        const b3 = MOBILE_REGION_BOUNDS.q3;
        const b4 = MOBILE_REGION_BOUNDS.q4;

        const scale = (xMin: number, xMax: number, yMin: number, yMax: number) => ({
            x: d3.scaleLinear().domain([xMin, xMax]).range([0, width]),
            y: d3.scaleLinear().domain([yMin, yMax]).range([MOBILE_SECTION_HEIGHT, 0]),
        });

        if (svg1Ref.current) {
            const { x: xScale, y: yScale } = scale(b1.xMin, b1.xMax, b1.yMin, b1.yMax);
            const sel = d3.select(svg1Ref.current);
            sel.selectAll('*').remove();
            const g = sel.append('g');
            const starsQ1 = refactorStars(STARS_COORDINATES_Q1_TEMPLATE, firstQuarterStars);
            const isQ1Active = targetQuarter === STARRY_SKY_QUORTERS.FIRST && !isLastYearTarget;
            const isQ1BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.FIRST || isLastYearTarget;
            if (firstQuarterData?.isValid) {
                renderFirstQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ1Active,
                    isQ1BTNActive,
                    firstQuarterAchievements,
                    starsQ1,
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountFirstQuarter ?? 0,
                );
            } else if (firstQuarterData && !firstQuarterData?.isValid) {
                renderFirstQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ1Active,
                    false,
                    [],
                    [],
                    xScale,
                    yScale,
                    goToPage,
                    true,
                    handleClickModalOpen,
                    handleClickStar,
                    true,
                    sizeWindow,
                    diplomCountFirstQuarter ?? 0,
                );
            } else {
                renderFirstQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ1Active,
                    false,
                    [],
                    refactorStars(STARS_COORDINATES_Q1_TEMPLATE, null),
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountFirstQuarter ?? 0,
                );
            }
        }

        if (svg2Ref.current) {
            const { x: xScale, y: yScale } = scale(b2.xMin, b2.xMax, b2.yMin, b2.yMax);
            const sel = d3.select(svg2Ref.current);
            sel.selectAll('*').remove();
            const g = sel.append('g');
            const starsQ2 = refactorStars(STARS_COORDINATES_Q2_TEMPLATE, secondQuarterStars);
            const isQ2Active = targetQuarter === STARRY_SKY_QUORTERS.SECOND && !isLastYearTarget;
            const isQ2BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.SECOND || isLastYearTarget;
            if (secondQuarterData?.isValid) {
                renderSecondQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ2Active,
                    isQ2BTNActive,
                    secondQuarterAchievements,
                    starsQ2,
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountSecondQuarter ?? 0,
                );
            } else if (secondQuarterData && !secondQuarterData?.isValid) {
                renderSecondQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ2Active,
                    false,
                    [],
                    [],
                    xScale,
                    yScale,
                    goToPage,
                    true,
                    handleClickModalOpen,
                    handleClickStar,
                    true,
                    sizeWindow,
                    diplomCountSecondQuarter ?? 0,
                );
            } else {
                renderSecondQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ2Active,
                    false,
                    [],
                    refactorStars(STARS_COORDINATES_Q2_TEMPLATE, null),
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountSecondQuarter ?? 0,
                );
            }
        }

        if (svgStarRef.current) {
            const { x: xScale, y: yScale } = scale(bStar.xMin, bStar.xMax, bStar.yMin, bStar.yMax);
            const sel = d3.select(svgStarRef.current);
            sel.selectAll('*').remove();
            const g = sel.append('g');
            renderStarOfYear(
                g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                activeQuarter ?? 0,
                xScale,
                yScale,
                MOBILE_DRAW_LINES,
                coordinatesLine,
                handleClickCentralStar,
                { centerImage: true },
            );
        }

        if (svg3Ref.current) {
            const { x: xScale, y: yScale } = scale(b3.xMin, b3.xMax, b3.yMin, b3.yMax);
            const sel = d3.select(svg3Ref.current);
            sel.selectAll('*').remove();
            const g = sel.append('g');
            const starsQ3 = refactorStars(STARS_COORDINATES_Q3_TEMPLATE, thirdQuarterStars);
            const isQ3Active = targetQuarter === STARRY_SKY_QUORTERS.THIRD && !isLastYearTarget;
            const isQ3BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.THIRD || isLastYearTarget;
            if (thirdQuarterData?.isValid) {
                renderThirdQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ3Active,
                    isQ3BTNActive,
                    thirdQuarterAchievements,
                    starsQ3,
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountThirdQuarter ?? 0,
                );
            } else if (thirdQuarterData && !thirdQuarterData?.isValid) {
                renderThirdQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ3Active,
                    false,
                    [],
                    [],
                    xScale,
                    yScale,
                    goToPage,
                    true,
                    handleClickModalOpen,
                    handleClickStar,
                    true,
                    sizeWindow,
                    diplomCountThirdQuarter ?? 0,
                );
            } else {
                renderThirdQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ3Active,
                    false,
                    [],
                    refactorStars(STARS_COORDINATES_Q3_TEMPLATE, []),
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountThirdQuarter ?? 0,
                );
            }
        }

        if (svg4Ref.current) {
            const { x: xScale, y: yScale } = scale(b4.xMin, b4.xMax, b4.yMin, b4.yMax);
            const sel = d3.select(svg4Ref.current);
            sel.selectAll('*').remove();
            const g = sel.append('g');
            const starsQ4 = refactorStars(STARS_COORDINATES_Q4_TEMPLATE, fourQuarterStars);
            const isQ4Active = targetQuarter === STARRY_SKY_QUORTERS.FOURTH && !isLastYearTarget;
            const isQ4BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.FOURTH || isLastYearTarget;
            if (fourQuarterData?.isValid) {
                renderFourQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ4Active,
                    isQ4BTNActive,
                    fourQuarterAchievements,
                    starsQ4,
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountFourQuarter ?? 0,
                );
            } else if (fourQuarterData && !fourQuarterData?.isValid) {
                renderFourQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ4Active,
                    false,
                    [],
                    [],
                    xScale,
                    yScale,
                    goToPage,
                    true,
                    handleClickModalOpen,
                    handleClickStar,
                    true,
                    sizeWindow,
                    diplomCountFourQuarter ?? 0,
                );
            } else {
                renderFourQuarter(
                    g as unknown as d3.Selection<SVGElement, unknown, null, undefined>,
                    isQ4Active,
                    false,
                    [],
                    refactorStars(STARS_COORDINATES_Q4_TEMPLATE, []),
                    xScale,
                    yScale,
                    goToPage,
                    false,
                    handleClickModalOpen,
                    handleClickStar,
                    false,
                    sizeWindow,
                    diplomCountFourQuarter ?? 0,
                );
            }
        }
    }, [
        starrySkyQuarters,
        width,
        height,
        firstQuarterData,
        secondQuarterData,
        thirdQuarterData,
        fourQuarterData,
        diplomCountFirstQuarter,
        diplomCountSecondQuarter,
        diplomCountThirdQuarter,
        diplomCountFourQuarter,
    ]);

    return (
        <div className="starry-sky-mobile">
            <svg ref={svg1Ref} width={width} height={MOBILE_SECTION_HEIGHT} className="starry-sky-mobile__section" />
            <svg ref={svg2Ref} width={width} height={MOBILE_SECTION_HEIGHT} className="starry-sky-mobile__section" />
            <svg ref={svgStarRef} width={width} height={MOBILE_SECTION_HEIGHT} className="starry-sky-mobile__section" />
            <svg ref={svg3Ref} width={width} height={MOBILE_SECTION_HEIGHT} className="starry-sky-mobile__section" />
            <svg ref={svg4Ref} width={width} height={MOBILE_SECTION_HEIGHT} className="starry-sky-mobile__section" />
        </div>
    );
};
