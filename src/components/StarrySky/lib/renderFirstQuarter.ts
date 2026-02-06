import type { ScaleLinear } from 'd3-scale';
import type { Selection } from 'd3-selection';
import type { IAnyParams, sizeWindowType, StarDataQuarter, StarrySkyQuarterAchievement } from '../types';
import { checkCodeAntiCase, checkCodeAntiControl, checkCodeBook, checkCodeBox, checkCodeCup, checkCodeDiplom, checkCodeEducation, checkCodeExpert, checkCodeGiftBox, checkCodeLike, checkCodeMentor, getLineMap } from '.';
import { ALL_START_QUARTERS, COSMO_CAT_QUARTER_STARRY_SKY, STARRY_SKY_ACHIEVEMENTS_CODE, STARRY_SKY_IMAGES_PRESENTS, STARRY_SKY_QUORTERS } from '../constants';


//([x1 - Number star, x2 - Number Next star, z - type line ])
const LINE_COORDINATES = [
    [1, 2],
    [1, 5],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 5],
];

const CONTACT_STARS = [
    [0, 1],
    [0, 4],
    [1, 2],
    [1, 4],
    [2, 3],
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
    [16, 17],
];

// Координаты углов(точек)
const starsCoordinatesQ1New = [
    { id: 1, x: 33, y: 495 },
    { id: 2, x: 94, y: 530 },
    { id: 3, x: 153, y: 502 },
    { id: 4, x: 222, y: 530 },
    { id: 5, x: 410, y: 534 },
    { id: 6, x: 455, y: 370 },
    { id: 7, x: 380, y: 340 },
    { id: 8, x: 348, y: 303 },
    { id: 9, x: 302, y: 318 },
    { id: 10, x: 218, y: 288 },
    { id: 11, x: 173, y: 300 },
    { id: 12, x: 124, y: 265 },
    { id: 13, x: 22, y: 297 },
    { id: 14, x: 22, y: 320 },
    { id: 15, x: 22, y: 395 },
    { id: 16, x: 38, y: 435 },
    { id: 17, x: 33, y: 495 },
];

/** Координаты рендера Ачивок главной страницы*/
const q1QuarterImg = { x: 45, y: 500 };
const q1Diplom = { x: 355, y: 430 };
const q1Mentor = { x: 225, y: 475 };
const q1Box = { x: 260, y: 510 };
const q1Book = { x: 120, y: 410 };
const q1Like = { x: 120, y: 343 };
const q1AntiControl = { x: 45, y: 343 };
const q1AntiCase = { x: 220, y: 343 };
const q1GiftBox = { x: 400, y: 410 };
const q1Cup = { x: 360, y: 510 };
const q1Plug = { x: 100, y: 520 };
const q1Expert = { x: 310, y: 500 };

export const renderFirstQuarter = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    isQ1Active: boolean,
    isQ1BTNActive: boolean,
    achievements: Array<StarrySkyQuarterAchievement>,
    starsCoordinatesQ1: Array<StarDataQuarter>,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    goToPage: (url: string, params: IAnyParams, writeHistory?: boolean, deleteParams?: string[]) => void,
    isQ1ShowPlug: boolean,
    handleClickModalOpen: (type: string, quarter: number) => void,
    handleClickStar: () => void,
    isQ1BTNBlocked: boolean,
    _sizeWindow: sizeWindowType,
    diplomCountFirstQuarter: number,
) => {
    const lineMap = getLineMap(starsCoordinatesQ1, CONTACT_STARS);
    const refactorCoordinateStar = (type: 'base' | 'active') => (type === 'base' ? 11 : 58);
    const refactorTypeStar = (type: 'base' | 'active') =>
        type === 'base' ? STARRY_SKY_IMAGES_PRESENTS.STAR : STARRY_SKY_IMAGES_PRESENTS.GLOWING_STAR;
    const handleClickQuarter = (quarter: string): void => {
        !isQ1BTNBlocked && goToPage('/starry-sky/quarter', { quarter }, true);
    };

    const handleClickStars = (index: number) => {
        const classShow = 'starry-sky-main-chart__text-star--show';
        const el = document.getElementById(`text-star-one${index}`);
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

    //Обработчики ачивок
    const handleClickDiplom = () => {
        handleClickModalOpen('diplom' + `${diplomCountFirstQuarter}`, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickEducation = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOX, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickGiftBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.GIFT_BOX, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickCup = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.CUP, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickMentor = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.MENTOR, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickBook = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOOK, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickLike = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.LIKE, STARRY_SKY_QUORTERS.FIRST);
    };

    const handleClickAntiControl = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CONTROL, STARRY_SKY_QUORTERS.FIRST);
    };
    const handleClickAntiCase = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CASE, STARRY_SKY_QUORTERS.FIRST);
    };

    const handleClickExpert = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EXPERT, STARRY_SKY_QUORTERS.FIRST);
    };

    /** Проверка на обводку области квартала */
    if (isQ1Active) {
        STROKE_LINE_COORDINATES.map(([a, b]) => {
            const P1 = starsCoordinatesQ1New.find(el => el.id === a);
            const P2 = starsCoordinatesQ1New.find(el => el.id === b);

            if (P1 && P2) {
                // Создаем путь
                const path = `M ${xScale(P1.x)},${yScale(P1.y)} L ${xScale(P2.x)},${yScale(P2.y)}`;
                svg.append('path')
                    .attr('d', path)
                    .attr('stroke-width', 1)
                    .attr('stroke-dasharray', 2)
                    .attr('fill', 'none')
                    .attr('stroke', '#FFFFFF')
                    .attr('stroke-linejoin', 'round'); // Закругленные углы
            }
        });
    }
    /** Проверка на вывод Кнопки квартала */
    if (isQ1BTNActive) {
        svg.append('svg:image')
            .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_ONE_ACTIVE)
            .attr('x', xScale(q1QuarterImg.x))
            .attr('y', yScale(q1QuarterImg.y))
            .attr('cursor', 'pointer')
            .on('click', () => handleClickQuarter('q1'));
    } else {
        svg.append('svg:image')
            .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_ONE_BASE)
            .attr('x', xScale(q1QuarterImg.x))
            .attr('y', yScale(q1QuarterImg.y))
            .attr('cursor', 'pointer')
            .on('click', () => handleClickQuarter('q1'));
    }
    /** Проверка на вывод заглушки */
    if (isQ1ShowPlug) {
        svg.append('svg:image')
            .attr('xlink:href', COSMO_CAT_QUARTER_STARRY_SKY)
            .attr('x', xScale(q1Plug.x))
            .attr('y', yScale(q1Plug.y));
    } else {
        /** Отрисовка линий */
        LINE_COORDINATES.map(([a, b], index) => {
            const P1 = starsCoordinatesQ1.find(el => el.id === a);
            const P2 = starsCoordinatesQ1.find(el => el.id === b);
            //Проверка на тип линий, рисуем активные линии если все звезды открыты
            if (P1 && P2) {
                svg.append('g')
                    .append('line')
                    .attr('x1', xScale(P1.x))
                    .attr('x2', xScale(P2.x))
                    .attr('y1', yScale(P1.y))
                    .attr('y2', yScale(P2.y))
                    .attr('stroke-width', 1)
                    .attr('line-Modal.tsx', index)
                    .attr('stroke', `${lineMap[index] ? '#FFFFFF' : '#9E9E9E'}`)
                    .attr('stroke-dasharray', `${lineMap[index] ? '' : 4}`);
            }
        });

        /** Отрисовка звезд */
        starsCoordinatesQ1.map((d, index) => {
            svg.append('svg:image')
                .attr('xlink:href', refactorTypeStar(d.type))
                .attr('x', xScale(d.x) - refactorCoordinateStar(d.type))
                .attr('y', yScale(d.y) - refactorCoordinateStar(d.type))
                .attr('cursor', 'pointer')
                .attr('star-Modal.tsx', index)
                .on('click', () => handleClickStars(index));
            svg.append('text')
                .attr('class', () => 'starry-sky-main-chart__text-star starry-sky-main-chart__text-star--hide')
                .attr('id', () => `text-star-one${index}`)
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
                .attr('x', xScale(q1Diplom.x) - 20)
                .attr('y', yScale(q1Diplom.y) - 15)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountFirstQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q1Diplom.x) + 14)
                    .attr('y', yScale(q1Diplom.y) + 16)
                    .text(`${diplomCountFirstQuarter}x`);
            }
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_BASE)
                .attr('x', xScale(q1Diplom.x) - 15)
                .attr('y', yScale(q1Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountFirstQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q1Diplom.x) + 20)
                    .attr('y', yScale(q1Diplom.y) + 22)
                    .text(`${diplomCountFirstQuarter}x`);
            }
        }

        //Отрисовка Education
        if (!checkCodeEducation(achievements)) {
            // no achievement
        } else if (checkCodeEducation(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_ACTIVE)
                .attr('x', xScale(q1Diplom.x) - 20)
                .attr('y', yScale(q1Diplom.y) - 15)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_BASE)
                .attr('x', xScale(q1Diplom.x) - 15)
                .attr('y', yScale(q1Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        }

        //Отрисовка коробки
        if (!checkCodeBox(achievements)) {
            // no achievement
        } else if (checkCodeBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_ACTIVE_INVERTED)
                .attr('x', xScale(q1Box.x))
                .attr('y', yScale(q1Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_BASE_INVERTED)
                .attr('x', xScale(q1Box.x))
                .attr('y', yScale(q1Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        }

        // Отрисовка ментора
        if (!checkCodeMentor(achievements)) {
            // no achievement
        } else if (checkCodeMentor(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_ACTIVE)
                .attr('x', xScale(q1Mentor.x))
                .attr('y', yScale(q1Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_BASE)
                .attr('x', xScale(q1Mentor.x))
                .attr('y', yScale(q1Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        }

        //Отрисовка подарка
        if (!checkCodeGiftBox(achievements)) {
            // no achievement
        } else if (checkCodeGiftBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_ACTIVE_INVERTED)
                .attr('x', xScale(q1GiftBox.x - 10))
                .attr('y', yScale(q1GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_BASE_INVERTED)
                .attr('x', xScale(q1GiftBox.x))
                .attr('y', yScale(q1GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        }

        //Отрисовка кубка
        if (!checkCodeCup(achievements)) {
            // no achievement
        } else if (checkCodeCup(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_ACTIVE_INVERTED)
                .attr('x', xScale(q1Cup.x))
                .attr('y', yScale(q1Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_BASE_INVERTED)
                .attr('x', xScale(q1Cup.x))
                .attr('y', yScale(q1Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        }

        //Отрисовка Книги
        if (!checkCodeBook(achievements)) {
            // no achievement
        } else if (checkCodeBook(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_ACTIVE)
                .attr('x', xScale(q1Book.x))
                .attr('y', yScale(q1Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_BASE)
                .attr('x', xScale(q1Book.x))
                .attr('y', yScale(q1Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        }

        //Отрисовка Like
        if (!checkCodeLike(achievements)) {
            // no achievement
        } else if (checkCodeLike(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_ACTIVE)
                .attr('x', xScale(q1Like.x))
                .attr('y', yScale(q1Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_BASE)
                .attr('x', xScale(q1Like.x))
                .attr('y', yScale(q1Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        }

        //Отрисовка AntiControl
        if (!checkCodeAntiControl(achievements)) {
            // no achievement
        } else if (checkCodeAntiControl(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_ACTIVE)
                .attr('x', xScale(q1AntiControl.x))
                .attr('y', yScale(q1AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_BASE)
                .attr('x', xScale(q1AntiControl.x))
                .attr('y', yScale(q1AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        }

        //Отрисовка AntiCase
        if (!checkCodeAntiCase(achievements)) {
            // no achievement
        } else if (checkCodeAntiCase(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_ACTIVE)
                .attr('x', xScale(q1AntiCase.x))
                .attr('y', yScale(q1AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_BASE)
                .attr('x', xScale(q1AntiCase.x))
                .attr('y', yScale(q1AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        }

        //Отрисовка Expert
        if (!checkCodeExpert(achievements)) {
            // no achievement
        } else if (checkCodeExpert(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_ACTIVE)
                .attr('x', xScale(q1Expert.x))
                .attr('y', yScale(q1Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_BASE)
                .attr('x', xScale(q1Expert.x))
                .attr('y', yScale(q1Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        }
    }
};

