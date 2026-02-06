import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3'
import type { IStarrySkyMainChart,  StarDataQuarter, StarrySkyQuarterAchievement, StarrySkyQuarterStar } from '../types';
import { filteredAchievementsByEducation, getCountDiplom, translateSizeBlock } from '../lib';
import { renderStarOfYear } from '../lib/renderStarOfYear';
import { coordinatesLine, STARRY_SKY_QUORTERS, starrySkyQuarters, STARS_COORDINATES_Q1_TEMPLATE, STARS_COORDINATES_Q2_TEMPLATE, STARS_COORDINATES_Q3_TEMPLATE, STARS_COORDINATES_Q4_TEMPLATE } from '../constants';
import { renderFirstQuarter } from '../lib/renderFirstQuarter';
import { renderSecondQuarter } from '../lib/renderSecondQuarter';
import { renderThirdQuarter } from '../lib/renderThirdQuarter';
import { renderFourQuarter } from '../lib/renderFourQuarter';

const drawLines = false;


export const StarrySkyMainChart: React.FC<IStarrySkyMainChart> = ({ dimensions, targetYear }) => {
    const isPriorityShowEducation = true;

    const svgRef = useRef(null);
    const { width, height } = dimensions;
    const sizeWindow = translateSizeBlock(width);

    //Adapters
    //Номер активного квартала
    const today = new Date();
    const targetQuarter = Math.floor((today.getMonth() + 3) / 3);
    const activeQuarter = starrySkyQuarters?.yearStar?.brightLevel;
    const quartersData = starrySkyQuarters?.quarters;
    const isLastYearTarget = targetYear !== today.getFullYear();
    //Q1 ADAPTERS
    const firstQuarterData = quartersData?.filter(d => d?.quarter === 1)[0];
    const firstQuarterStars = firstQuarterData?.elements?.quarterStars;
    const firstQuarterAchievements = firstQuarterData?.elements?.achievements?.length
        ? filteredAchievementsByEducation(firstQuarterData.elements.achievements as StarrySkyQuarterAchievement[], isPriorityShowEducation)
        : [];
    const diplomCountFirstQuarter = useMemo(
        () => getCountDiplom(firstQuarterAchievements),
        [firstQuarterAchievements],
    );

    //Q2 ADAPTERS
    const secondQuarterData = quartersData?.filter(d => d?.quarter === 2)[0];
    const secondQuarterStars = secondQuarterData?.elements?.quarterStars;
    const secondQuarterAchievements = secondQuarterData?.elements?.achievements?.length
        ? filteredAchievementsByEducation(secondQuarterData.elements.achievements as StarrySkyQuarterAchievement[], isPriorityShowEducation)
        : [];
    const diplomCountSecondQuarter = useMemo(
        () => getCountDiplom(secondQuarterAchievements),
        [secondQuarterAchievements],
    );
    //Q3 ADAPTERS
    const thirdQuarterData = quartersData?.filter(d => d?.quarter === 3)[0];
    const thirdQuarterStars = thirdQuarterData?.elements?.quarterStars;
    const thirdQuarterAchievements = thirdQuarterData?.elements?.achievements?.length
        ? filteredAchievementsByEducation(thirdQuarterData.elements.achievements as StarrySkyQuarterAchievement[], isPriorityShowEducation)
        : [];
    const diplomCountThirdQuarter = useMemo(
        () => getCountDiplom(thirdQuarterAchievements),
        [thirdQuarterAchievements],
    );
    //Q4 ADAPTERS
    const fourQuarterData = quartersData?.filter(d => d?.quarter === 4)[0];
    const fourQuarterStars = fourQuarterData?.elements?.quarterStars;
    const fourQuarterAchievements = fourQuarterData?.elements?.achievements?.length
        ? filteredAchievementsByEducation(fourQuarterData.elements.achievements as StarrySkyQuarterAchievement[], isPriorityShowEducation)
        : [];
    const diplomCountFourQuarter = useMemo(
        () => getCountDiplom(fourQuarterAchievements),
        [fourQuarterAchievements],
    );

    //Генерация модалок для ачивок

    const handleClickStar = (): void => {
    };

    const handleClickCentralStar = () => {
    };

    const handleClickModalOpen = (_type: string, _quarter: number): void => {
    };
    const goToPage = (_url?: string, _params?: Record<string, string | number>, _writeHistory?: boolean, _deleteParams?: string[]) => {
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

    //function reneder sky
    const createSky = () => {
        const xScale = d3.scaleLinear().domain([0, 942]).range([0, width]);
        const yScale = d3.scaleLinear().domain([0, 537]).range([height, 0]);
        // Create root container where we will append all other chart elements
        const svgEl = d3.select(svgRef.current);
        svgEl.selectAll('*').remove(); // Clear svg content before adding new elements
        const svg = svgEl.append('g') as unknown as d3.Selection<SVGElement, unknown, null, undefined>;

        //////////////////////  ЗВЕЗДА В ЦЕНТРЕ ЭКРАНА   //////////////////
        const starTypeForRender = activeQuarter ?? 0;
        renderStarOfYear(svg, starTypeForRender, xScale, yScale, drawLines, coordinatesLine, handleClickCentralStar);

        //////////////////////  Q1 DRAW     //////////////////
        if (firstQuarterData && firstQuarterData?.isValid) {
            const starsCoordinatesQ1 = refactorStars(STARS_COORDINATES_Q1_TEMPLATE, firstQuarterStars);
            const isQ1Active = targetQuarter === STARRY_SKY_QUORTERS.FIRST && !isLastYearTarget;
            const isQ1BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.FIRST || isLastYearTarget;
            const isQ1ShowPlug = false;
            const isQ1BTNBlocked = false;
            renderFirstQuarter(
                svg,
                isQ1Active,
                isQ1BTNActive,
                firstQuarterAchievements,
                starsCoordinatesQ1,
                xScale,
                yScale,
                goToPage,
                isQ1ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ1BTNBlocked,
                sizeWindow,
                diplomCountFirstQuarter ?? 0,
            );
        }
        //Заглушка кот
        if (firstQuarterData && !firstQuarterData?.isValid) {
            const isQ1Active = targetQuarter === STARRY_SKY_QUORTERS.FIRST && !isLastYearTarget;
            const isQ1BTNActive = false;
            const isQ1ShowPlug = true;
            const isQ1BTNBlocked = true;
            renderFirstQuarter(
                svg,
                isQ1Active,
                isQ1BTNActive,
                [],
                [],
                xScale,
                yScale,
                goToPage,
                isQ1ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ1BTNBlocked,
                sizeWindow,
                diplomCountFirstQuarter ?? 0,
            );
        }
        //Пустые координаты
        if (!firstQuarterData) {
            const starsCoordinatesQ1 = refactorStars(STARS_COORDINATES_Q1_TEMPLATE, null);
            const isQ1Active = targetQuarter === STARRY_SKY_QUORTERS.FIRST && !isLastYearTarget;
            const isQ1BTNActive = false;
            const isQ1ShowPlug = false;
            const isQ1BTNBlocked = false;
            renderFirstQuarter(
                svg,
                isQ1Active,
                isQ1BTNActive,
                [],
                starsCoordinatesQ1,
                xScale,
                yScale,
                goToPage,
                isQ1ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ1BTNBlocked,
                sizeWindow,
                diplomCountFirstQuarter ?? 0,
            );
        }

        //////////////////////  Q2 DRAW     //////////////////
        if (secondQuarterData && secondQuarterData?.isValid) {
            const starsCoordinatesQ2 = refactorStars(STARS_COORDINATES_Q2_TEMPLATE, secondQuarterStars);
            const isQ2Active = targetQuarter === STARRY_SKY_QUORTERS.SECOND && !isLastYearTarget;
            const isQ2BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.SECOND || isLastYearTarget;
            const isQ2ShowPlug = false;
            const isQ2BTNBlocked = false;
            renderSecondQuarter(
                svg,
                isQ2Active,
                isQ2BTNActive,
                secondQuarterAchievements,
                starsCoordinatesQ2,
                xScale,
                yScale,
                goToPage,
                isQ2ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ2BTNBlocked,
                sizeWindow,
                diplomCountSecondQuarter ?? 0,
            );
        }
        //Заглушка кот
        if (secondQuarterData && !secondQuarterData?.isValid) {
            const isQ2Active = targetQuarter === STARRY_SKY_QUORTERS.SECOND && !isLastYearTarget;
            const isQ2BTNActive = false;
            const isQ2ShowPlug = true;
            const isQ2BTNBlocked = true;
            renderSecondQuarter(
                svg,
                isQ2Active,
                isQ2BTNActive,
                [],
                [],
                xScale,
                yScale,
                goToPage,
                isQ2ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ2BTNBlocked,
                sizeWindow,
                diplomCountSecondQuarter ?? 0,
            );
        }
        //Пустые координаты
        if (!secondQuarterData) {
            const starsCoordinatesQ2 = refactorStars(STARS_COORDINATES_Q2_TEMPLATE, null);
            const isQ2Active = targetQuarter === STARRY_SKY_QUORTERS.SECOND && !isLastYearTarget;
            const isQ2BTNActive = false;
            const isQ2ShowPlug = false;
            const isQ2BTNBlocked = false;
            renderSecondQuarter(
                svg,
                isQ2Active,
                isQ2BTNActive,
                [],
                starsCoordinatesQ2,
                xScale,
                yScale,
                goToPage,
                isQ2ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ2BTNBlocked,
                sizeWindow,
                diplomCountSecondQuarter ?? 0,
            );
        }

        //////////////////////  Q3 DRAW     //////////////////
        if (thirdQuarterData && thirdQuarterData?.isValid) {
            const starsCoordinatesQ3 = refactorStars(STARS_COORDINATES_Q3_TEMPLATE, thirdQuarterStars);
            const isQ3Active = targetQuarter === STARRY_SKY_QUORTERS.THIRD && !isLastYearTarget;
            const isQ3BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.THIRD || isLastYearTarget;
            const isQ3ShowPlug = false;
            const isQ3BTNBlocked = false;
            renderThirdQuarter(
                svg,
                isQ3Active,
                isQ3BTNActive,
                thirdQuarterAchievements,
                starsCoordinatesQ3,
                xScale,
                yScale,
                goToPage,
                isQ3ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ3BTNBlocked,
                sizeWindow,
                diplomCountThirdQuarter ?? 0,
            );
        }
        //Заглушка кот
        if (thirdQuarterData && !thirdQuarterData?.isValid) {
            const isQ3Active = targetQuarter === STARRY_SKY_QUORTERS.THIRD && !isLastYearTarget;
            const isQ3BTNActive = false;
            const isQ3ShowPlug = true;
            const isQ3BTNBlocked = true;
            renderThirdQuarter(
                svg,
                isQ3Active,
                isQ3BTNActive,
                [],
                [],
                xScale,
                yScale,
                goToPage,
                isQ3ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ3BTNBlocked,
                sizeWindow,
                diplomCountThirdQuarter ?? 0,
            );
        }
        //Пустые координаты
        if (!thirdQuarterData) {
            const starsCoordinatesQ3 = refactorStars(STARS_COORDINATES_Q3_TEMPLATE, []);
            const isQ3Active = targetQuarter === STARRY_SKY_QUORTERS.THIRD && !isLastYearTarget;
            const isQ3BTNActive = false;
            const isQ3ShowPlug = false;
            const isQ3BTNBlocked = false;
            renderThirdQuarter(
                svg,
                isQ3Active,
                isQ3BTNActive,
                [],
                starsCoordinatesQ3,
                xScale,
                yScale,
                goToPage,
                isQ3ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ3BTNBlocked,
                sizeWindow,
                diplomCountThirdQuarter ?? 0,
            );
        }
        //////////////////////  Q4 DRAW     //////////////////
        if (fourQuarterData && fourQuarterData?.isValid) {
            const starsCoordinatesQ4 = refactorStars(STARS_COORDINATES_Q4_TEMPLATE, fourQuarterStars);
            const isQ4BTNActive = targetQuarter >= STARRY_SKY_QUORTERS.FOURTH || isLastYearTarget;
            const isQ4Active = targetQuarter === STARRY_SKY_QUORTERS.FOURTH && !isLastYearTarget;
            const isQ4ShowPlug = false;
            const isQ4BTNBlocked = false;
            renderFourQuarter(
                svg,
                isQ4Active,
                isQ4BTNActive,
                fourQuarterAchievements,
                starsCoordinatesQ4,
                xScale,
                yScale,
                goToPage,
                isQ4ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ4BTNBlocked,
                sizeWindow,
                diplomCountFourQuarter ?? 0,
            );
        }

        // Заглушка кот
        if (fourQuarterData && !fourQuarterData?.isValid) {
            const isQ4BTNActive = false;
            const isQ4Active = targetQuarter === STARRY_SKY_QUORTERS.FOURTH && !isLastYearTarget;
            const isQ4ShowPlug = true;
            const isQ4BTNBlocked = true;
            renderFourQuarter(
                svg,
                isQ4Active,
                isQ4BTNActive,
                [],
                [],
                xScale,
                yScale,
                goToPage,
                isQ4ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ4BTNBlocked,
                sizeWindow,
                diplomCountFourQuarter ?? 0,
            );
        }
        //Пустые координаты
        if (!fourQuarterData) {
            const starsCoordinatesQ4 = refactorStars(STARS_COORDINATES_Q4_TEMPLATE, []);
            const isQ4BTNActive = false;
            const isQ4Active = targetQuarter === STARRY_SKY_QUORTERS.FOURTH && !isLastYearTarget;
            const isQ4ShowPlug = false;
            const isQ4BTNBlocked = false;
            renderFourQuarter(
                svg,
                isQ4Active,
                isQ4BTNActive,
                [],
                starsCoordinatesQ4,
                xScale,
                yScale,
                goToPage,
                isQ4ShowPlug,
                handleClickModalOpen,
                handleClickStar,
                isQ4BTNBlocked,
                sizeWindow,
                diplomCountFourQuarter ?? 0,
            );
        }
    };
    useEffect(() => {
        if (!starrySkyQuarters) return;
        createSky();
    }, [starrySkyQuarters, width]);

    return <svg ref={svgRef} width={width} height={height} />;
};

