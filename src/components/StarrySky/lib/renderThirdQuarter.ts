import type { ScaleLinear } from 'd3-scale';
import type { Selection } from 'd3-selection';
import type { IAnyParams, sizeWindowType, StarDataQuarter, StarrySkyQuarterAchievement } from '../types';
import { checkCodeAntiCase, checkCodeAntiControl, checkCodeBook, checkCodeBox, checkCodeCup, checkCodeDiplom, checkCodeEducation, checkCodeExpert, checkCodeGiftBox, checkCodeLike, checkCodeMentor, getLineMap } from '.';
import { ALL_START_QUARTERS, COSMO_CAT_QUARTER_STARRY_SKY, STARRY_SKY_ACHIEVEMENTS_CODE, STARRY_SKY_IMAGES_PRESENTS, STARRY_SKY_QUORTERS } from '../constants';

const LINE_COORDINATES = [
    [1, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [4, 5],
];

const CONTACT_STARS = [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
];

// Координаты соединений
const STROKE_LINE_COORDINATES = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 16],
];

// Координаты углов(точек)
const starsCoordinatesQ3New = [
    { id: 1, x: 33, y: 214 },
    { id: 2, x: 94, y: 254 },
    { id: 3, x: 132, y: 240 },
    { id: 4, x: 246, y: 280 },
    { id: 5, x: 297, y: 260 },
    { id: 6, x: 390, y: 258 },
    { id: 7, x: 404, y: 180 },
    { id: 8, x: 453, y: 142 },
    { id: 9, x: 462, y: 49 },
    { id: 10, x: 374, y: 58 },
    { id: 11, x: 344, y: 6 },
    { id: 12, x: 146, y: -6 },
    { id: 13, x: 92, y: 31 },
    { id: 14, x: 42, y: 20 },
    { id: 15, x: 21, y: 52 },
    { id: 16, x: 33, y: 214 },
];

const q3QuarterImg = { x: 49, y: 225 };
const q3Diplom = { x: 165, y: 110 };
const q3Mentor = { x: 310, y: 100 };
const q3Box = { x: 80, y: 100 };
const q3Book = { x: 320, y: 153 };
const q3Like = { x: 250, y: 65 };
const q3AntiControl = { x: 150, y: 237 };
const q3AntiCase = { x: 165, y: 60 };
const q3GiftBox = { x: 340, y: 230 };
const q3Cup = { x: 380, y: 135 };
const q3Plug = { x: 100, y: 260 };
const q3Expert = { x: 225, y: 265 };

export const renderThirdQuarter = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    isQ3Active: boolean,
    isQ3BTNActive: boolean,
    achievements: Array<StarrySkyQuarterAchievement>,
    starsCoordinatesQ3: Array<StarDataQuarter>,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    goToPage: (url: string, params: IAnyParams, writeHistory?: boolean, deleteParams?: string[]) => void,
    isQ3ShowPlug: boolean,
    handleClickModalOpen: (type: string, quorter: number) => void,
    handleClickStar: () => void,
    isQ3BTNBlocked: boolean,
    _sizeWindow: sizeWindowType,
    diplomCountThirdQuarter: number,
) => {
    const lineMap = getLineMap(starsCoordinatesQ3, CONTACT_STARS);

    const refactorCoordinateStar = (type: 'base' | 'active') => (type === 'base' ? 11 : 58);
    const refactorTypeStar = (type: 'base' | 'active') =>
        type === 'base' ? STARRY_SKY_IMAGES_PRESENTS.STAR : STARRY_SKY_IMAGES_PRESENTS.GLOWING_STAR;
    const handleClickQuarter = (quarter: string): void => {
        !isQ3BTNBlocked && goToPage('/starry-sky/quarter', { quarter }, true);
    };

    const handleClickStars = (index: number) => {
        const classShow = 'starry-sky-main-chart__text-star--show';
        const el = document.getElementById(`text-star-three${index}`);
        if (!el) return;
        if (el.classList.contains(classShow)) {
            el.classList.remove(classShow);
        } else {
            ALL_START_QUARTERS.forEach(star => {
                const starEl = document.getElementById(star);
                if (starEl) starEl.classList.remove(classShow);
            });
            el.classList.add(classShow);
        }
        handleClickStar();
    };

    // Обработчики ачивок
    const handleClickDiplom = () => {
        handleClickModalOpen('diplom' + `${diplomCountThirdQuarter}`, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickEducation = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOX, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickGiftBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.GIFT_BOX, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickCup = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.CUP, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickMentor = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.MENTOR, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickBook = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOOK, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickLike = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.LIKE, STARRY_SKY_QUORTERS.THIRD);
    };

    const handleClickAntiControl = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CONTROL, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickAntiCase = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CASE, STARRY_SKY_QUORTERS.THIRD);
    };
    const handleClickExpert = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EXPERT, STARRY_SKY_QUORTERS.THIRD);
    };
    /** Проверка на обводку области квартала */
    if (isQ3Active) {
        STROKE_LINE_COORDINATES.map(([a, b]) => {
            const P1 = starsCoordinatesQ3New.find(el => el.id === a);
            const P2 = starsCoordinatesQ3New.find(el => el.id === b);
            if (P1 && P2) {
                // Создаем путь
                const path = `M ${xScale(P1.x)},${yScale(P1.y)} L ${xScale(P2.x)},${yScale(P2.y)}`;
                svg.append('path')
                    .attr('d', path)
                    .attr('stroke-width', 1)
                    .attr('stroke-dasharray', 2)
                    .attr('fill', 'none')
                    .attr('stroke', '#ffffff')
                    .attr('stroke-linejoin', 'round'); // Закругленные углы
            }
        });
    }
    if (isQ3BTNActive) {
        svg.append('svg:image')
            .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_THREE_ACTIVE)
            .attr('x', xScale(q3QuarterImg.x))
            .attr('y', yScale(q3QuarterImg.y))
            .attr('cursor', 'pointer')
            .on('click', () => handleClickQuarter('q3'));
    } else {
        svg.append('svg:image')
            .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_THREE_BASE)
            .attr('x', xScale(q3QuarterImg.x))
            .attr('y', yScale(q3QuarterImg.y))
            .attr('cursor', 'pointer')
            .on('click', () => handleClickQuarter('q3'));
    }
    /** Проверка на вывод заглушки */
    if (isQ3ShowPlug) {
        svg.append('svg:image')
            .attr('xlink:href', COSMO_CAT_QUARTER_STARRY_SKY)
            .attr('x', xScale(q3Plug.x))
            .attr('y', yScale(q3Plug.y));
    } else {
        LINE_COORDINATES.map(([a, b], index) => {
            const P1 = starsCoordinatesQ3.find(el => el.id === a);
            const P2 = starsCoordinatesQ3.find(el => el.id === b);
            //Проверка на тип линий, рисуем активные линии если все звезды открыты
            if (P1 && P2) {
                svg.append('g')
                    .append('line')
                    .attr('x1', xScale(P1.x))
                    .attr('x2', xScale(P2.x))
                    .attr('y1', yScale(P1.y))
                    .attr('y2', yScale(P2.y))
                    .attr('stroke-width', 1)
                    .attr('line-index', index)
                    .attr('stroke', `${lineMap[index] ? '#FFFFFF' : '#9E9E9E'}`)
                    .attr('stroke-dasharray', `${lineMap[index] ? '' : 4}`);
            }
        });

        /** Отрисовка названия звезд */
        //Draw stars
        starsCoordinatesQ3.map((d, index) => {
            svg.append('svg:image')
                .attr('xlink:href', refactorTypeStar(d.type))
                .attr('x', xScale(d.x) - refactorCoordinateStar(d.type))
                .attr('y', yScale(d.y) - refactorCoordinateStar(d.type))
                .attr('star-index', index)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickStars(index));
            svg.append('text')
                .attr('class', () => 'starry-sky-main-chart__text-star starry-sky-main-chart__text-star--hide')
                .attr('id', () => `text-star-three${index}`)
                .attr('x', xScale((d?.x ?? 0) + 20))
                .attr('y', yScale((d?.y ?? 0) + 5))
                .text('');
        });

        /** Отрисовка ачивок */
        // Отрисовка диплома
        if (!checkCodeDiplom(achievements)) {
            // no achievement
        } else if (checkCodeDiplom(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_ACTIVE)
                .attr('x', xScale(q3Diplom.x) - 15)
                .attr('y', yScale(q3Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountThirdQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q3Diplom.x) + 18)
                    .attr('y', yScale(q3Diplom.y) + 22)
                    .text(`${diplomCountThirdQuarter}x`);
            }
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_BASE)
                .attr('x', xScale(q3Diplom.x) - 15)
                .attr('y', yScale(q3Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountThirdQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q3Diplom.x) + 20)
                    .attr('y', yScale(q3Diplom.y) + 22)
                    .text(`${diplomCountThirdQuarter}x`);
            }
        }
        //Отрисовка Education
        if (!checkCodeEducation(achievements)) {
            // no achievement
        } else if (checkCodeEducation(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_ACTIVE)
                .attr('x', xScale(q3Diplom.x) - 20)
                .attr('y', yScale(q3Diplom.y) - 15)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_BASE)
                .attr('x', xScale(q3Diplom.x) - 15)
                .attr('y', yScale(q3Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        }

        //Отрисовка коробки
        if (!checkCodeBox(achievements)) {
            // no achievement
        } else if (checkCodeBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_ACTIVE_INVERTED)
                .attr('x', xScale(q3Box.x))
                .attr('y', yScale(q3Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_BASE_INVERTED)
                .attr('x', xScale(q3Box.x))
                .attr('y', yScale(q3Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        }

        // Отрисовка ментора
        if (!checkCodeMentor(achievements)) {
            // no achievement
        } else if (checkCodeMentor(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_ACTIVE)
                .attr('x', xScale(q3Mentor.x))
                .attr('y', yScale(q3Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_BASE)
                .attr('x', xScale(q3Mentor.x))
                .attr('y', yScale(q3Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        }

        //Отрисовка подарка
        if (!checkCodeGiftBox(achievements)) {
            // no achievement
        } else if (checkCodeGiftBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_ACTIVE_INVERTED)
                .attr('x', xScale(q3GiftBox.x))
                .attr('y', yScale(q3GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_BASE_INVERTED)
                .attr('x', xScale(q3GiftBox.x))
                .attr('y', yScale(q3GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        }

        //Отрисовка кубка
        if (!checkCodeCup(achievements)) {
            // no achievement
        } else if (checkCodeCup(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_ACTIVE_INVERTED)
                .attr('x', xScale(q3Cup.x))
                .attr('y', yScale(q3Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_BASE_INVERTED)
                .attr('x', xScale(q3Cup.x))
                .attr('y', yScale(q3Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        }

        //Отрисовка Книги
        if (!checkCodeBook(achievements)) {
            // no achievement
        } else if (checkCodeBook(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_ACTIVE)
                .attr('x', xScale(q3Book.x))
                .attr('y', yScale(q3Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_BASE)
                .attr('x', xScale(q3Book.x))
                .attr('y', yScale(q3Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        }

        //Отрисовка Like
        if (!checkCodeLike(achievements)) {
            // no achievement
        } else if (checkCodeLike(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_ACTIVE)
                .attr('x', xScale(q3Like.x))
                .attr('y', yScale(q3Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_BASE)
                .attr('x', xScale(q3Like.x))
                .attr('y', yScale(q3Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        }

        //Отрисовка AntiControl
        if (!checkCodeAntiControl(achievements)) {
            // no achievement
        } else if (checkCodeAntiControl(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_ACTIVE)
                .attr('x', xScale(q3AntiControl.x))
                .attr('y', yScale(q3AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_BASE)
                .attr('x', xScale(q3AntiControl.x))
                .attr('y', yScale(q3AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        }

        //Отрисовка AntiCase
        if (!checkCodeAntiCase(achievements)) {
            // no achievement
        } else if (checkCodeAntiCase(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_ACTIVE)
                .attr('x', xScale(q3AntiCase.x))
                .attr('y', yScale(q3AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_BASE)
                .attr('x', xScale(q3AntiCase.x))
                .attr('y', yScale(q3AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        }

        //Отрисовка Expert
        if (!checkCodeExpert(achievements)) {
            // no achievement
        } else if (checkCodeExpert(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_ACTIVE_INVERTED)
                .attr('x', xScale(q3Expert.x))
                .attr('y', yScale(q3Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_BASE_INVERTED)
                .attr('x', xScale(q3Expert.x))
                .attr('y', yScale(q3Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        }
    }
};