import type { ScaleLinear } from 'd3-scale';
import type { Selection } from 'd3-selection';
import type { IAnyParams, sizeWindowType, StarDataQuarter, StarrySkyQuarterAchievement } from '../types';
import { checkCodeAntiCase, checkCodeAntiControl, checkCodeBook, checkCodeBox, checkCodeCup, checkCodeDiplom, checkCodeEducation, checkCodeExpert, checkCodeGiftBox, checkCodeLike, checkCodeMentor, getLineMap } from '.';
import { ALL_START_QUARTERS, COSMO_CAT_QUARTER_STARRY_SKY, STARRY_SKY_ACHIEVEMENTS_CODE, STARRY_SKY_IMAGES_PRESENTS, STARRY_SKY_QUORTERS } from '../constants';

const LINE_COORDINATES = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [2, 5],
    [4, 5],
];

const CONTACT_STARS = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [1, 4],
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
];

// Координаты углов(точек)
const starsCoordinatesQ2New = [
    { id: 1, x: 520, y: 540 },
    { id: 2, x: 564, y: 547 },
    { id: 3, x: 654, y: 526 },
    { id: 4, x: 796, y: 548 },
    { id: 5, x: 892, y: 538 },
    { id: 6, x: 932, y: 518 },
    { id: 7, x: 908, y: 430 },
    { id: 8, x: 926, y: 371 },
    { id: 9, x: 786, y: 278 },
    { id: 10, x: 722, y: 300 },
    { id: 11, x: 650, y: 298 },
    { id: 12, x: 547, y: 327 },
    { id: 13, x: 530, y: 420 },
    { id: 14, x: 482, y: 474 },
    { id: 15, x: 520, y: 540 },
];

const q2QuarterImg = { x: 820, y: 510 };
const q2Diplom = { x: 575, y: 430 };
const q2Mentor = { x: 783, y: 352 };
const q2Box = { x: 580, y: 510 };
const q2Book = { x: 807, y: 432 };
const q2Like = { x: 680, y: 355 };
const q2AntiControl = { x: 820, y: 400 };
const q2AntiCase = { x: 610, y: 355 };
const q2GiftBox = { x: 740, y: 470 };
const q2Cup = { x: 520, y: 500 };
const q2Plug = { x: 570, y: 500 };
const q2Expert = { x: 870, y: 455 };

export const renderSecondQuarter = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    isQ2Active: boolean,
    isQ2BTNActive: boolean,
    achievements: Array<StarrySkyQuarterAchievement>,
    starsCoordinatesQ2: Array<StarDataQuarter>,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    goToPage: (url: string, params: IAnyParams, writeHistory?: boolean, deleteParams?: string[]) => void,
    isQ2ShowPlug: boolean,
    handleClickModalOpen: (type: string, quarter: number) => void,
    handleClickStar: () => void,
    isQ2BTNBlocked: boolean,
    _sizeWindow: sizeWindowType,
    diplomCountSecondQuarter: number,
) => {
    const lineMap = getLineMap(starsCoordinatesQ2, CONTACT_STARS);

    const refactorCoordinateStar = (type: 'base' | 'active') => (type === 'base' ? 11 : 58);
    const refactorTypeStar = (type: 'base' | 'active') =>
        type === 'base' ? STARRY_SKY_IMAGES_PRESENTS.STAR : STARRY_SKY_IMAGES_PRESENTS.GLOWING_STAR;

    const handleClickQuarter = (quarter: string): void => {
        !isQ2BTNBlocked && goToPage('/starry-sky/quarter', { quarter }, true);
    };

    const handleClickStars = (index: number) => {
        const classShow = 'starry-sky-main-chart__text-star--show';
        const el = document.getElementById(`text-star-two${index}`);
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
        handleClickModalOpen('diplom' + `${diplomCountSecondQuarter}`, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickEducation = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOX, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickGiftBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.GIFT_BOX, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickCup = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.CUP, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickMentor = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.MENTOR, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickBook = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOOK, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickLike = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.LIKE, STARRY_SKY_QUORTERS.SECOND);
    };

    const handleClickAntiControl = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CONTROL, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickAntiCase = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CASE, STARRY_SKY_QUORTERS.SECOND);
    };
    const handleClickExpert = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EXPERT, STARRY_SKY_QUORTERS.SECOND);
    };

    /** Проверка на обводку области квартала */
    if (isQ2Active) {
        STROKE_LINE_COORDINATES.map(([a, b]) => {
            const P1 = starsCoordinatesQ2New.find(el => el.id === a);
            const P2 = starsCoordinatesQ2New.find(el => el.id === b);

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

    /** Проверка на вывод заглушки */
    if (isQ2ShowPlug) {
        svg.append('svg:image')
            .attr('xlink:href', COSMO_CAT_QUARTER_STARRY_SKY)
            .attr('x', xScale(q2Plug.x))
            .attr('y', yScale(q2Plug.y));
    } else {
        LINE_COORDINATES.map(([a, b], index) => {
            const P1 = starsCoordinatesQ2.find(el => el.id === a);
            const P2 = starsCoordinatesQ2.find(el => el.id === b);

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
        starsCoordinatesQ2.map((d, index) => {
            svg.append('svg:image')
                .attr('xlink:href', refactorTypeStar(d.type))
                .attr('x', xScale(d.x) - refactorCoordinateStar(d.type))
                .attr('y', yScale(d.y) - refactorCoordinateStar(d.type))
                .attr('cursor', 'pointer')
                .attr('star-Modal.tsx', index)
                .on('click', () => handleClickStars(index));
            svg.append('text')
                .attr('class', () => 'starry-sky-main-chart__text-star starry-sky-main-chart__text-star--hide')
                .attr('id', () => `text-star-two${index}`)
                .attr('x', xScale((d?.x ?? 0) + 20))
                .attr('y', yScale((d?.y ?? 0) + 5))
                .text('');
        });

        /** Отрисовка ачивок */

        //Отрисовка диплома
        if (!checkCodeDiplom(achievements)) {
            // no achievement
        } else if (checkCodeDiplom(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_ACTIVE)
                .attr('x', xScale(q2Diplom.x) - 15)
                .attr('y', yScale(q2Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountSecondQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q2Diplom.x) + 18)
                    .attr('y', yScale(q2Diplom.y) + 22)
                    .text(`${diplomCountSecondQuarter}x`);
            }
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_BASE)
                .attr('x', xScale(q2Diplom.x) - 15)
                .attr('y', yScale(q2Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountSecondQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q2Diplom.x) + 20)
                    .attr('y', yScale(q2Diplom.y) + 22)
                    .text(`${diplomCountSecondQuarter}x`);
            }
        }

        //Отрисовка Education
        if (!checkCodeEducation(achievements)) {
            // no achievement
        } else if (checkCodeEducation(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_ACTIVE)
                .attr('x', xScale(q2Diplom.x) - 20)
                .attr('y', yScale(q2Diplom.y) - 15)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_BASE)
                .attr('x', xScale(q2Diplom.x) - 15)
                .attr('y', yScale(q2Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        }

        //Отрисовка коробки
        if (!checkCodeBox(achievements)) {
            // no achievement
        } else if (checkCodeBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_ACTIVE)
                .attr('x', xScale(q2Box.x))
                .attr('y', yScale(q2Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_BASE)
                .attr('x', xScale(q2Box.x))
                .attr('y', yScale(q2Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        }

        // Отрисовка ментора
        if (!checkCodeMentor(achievements)) {
            // no achievement
        } else if (checkCodeMentor(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_ACTIVE_INVERTED)
                .attr('x', xScale(q2Mentor.x))
                .attr('y', yScale(q2Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_BASE_INVERTED)
                .attr('x', xScale(q2Mentor.x))
                .attr('y', yScale(q2Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        }

        //Отрисовка подарка
        if (!checkCodeGiftBox(achievements)) {
            // no achievement
        } else if (checkCodeGiftBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_ACTIVE)
                .attr('x', xScale(q2GiftBox.x))
                .attr('y', yScale(q2GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_BASE)
                .attr('x', xScale(q2GiftBox.x))
                .attr('y', yScale(q2GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        }

        //Отрисовка кубка
        if (!checkCodeCup(achievements)) {
            // no achievement
        } else if (checkCodeCup(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_ACTIVE)
                .attr('x', xScale(q2Cup.x))
                .attr('y', yScale(q2Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_BASE)
                .attr('x', xScale(q2Cup.x))
                .attr('y', yScale(q2Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        }

        //Отрисовка Книги
        if (!checkCodeBook(achievements)) {
            // no achievement
        } else if (checkCodeBook(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_ACTIVE)
                .attr('x', xScale(q2Book.x))
                .attr('y', yScale(q2Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_BASE)
                .attr('x', xScale(q2Book.x))
                .attr('y', yScale(q2Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        }

        //Отрисовка Like
        if (!checkCodeLike(achievements)) {
            // no achievement
        } else if (checkCodeLike(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_ACTIVE)
                .attr('x', xScale(q2Like.x))
                .attr('y', yScale(q2Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_BASE)
                .attr('x', xScale(q2Like.x))
                .attr('y', yScale(q2Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        }

        //Отрисовка AntiControl
        if (!checkCodeAntiControl(achievements)) {
            // no achievement
        } else if (checkCodeAntiControl(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_ACTIVE_INVERTED)
                .attr('x', xScale(q2AntiControl.x))
                .attr('y', yScale(q2AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_BASE_INVERTED)
                .attr('x', xScale(q2AntiControl.x))
                .attr('y', yScale(q2AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        }

        //Отрисовка AntiCase
        if (!checkCodeAntiCase(achievements)) {
            // no achievement
        } else if (checkCodeAntiCase(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_ACTIVE)
                .attr('x', xScale(q2AntiCase.x))
                .attr('y', yScale(q2AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_BASE)
                .attr('x', xScale(q2AntiCase.x))
                .attr('y', yScale(q2AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        }

        // должен быть послдений, чтобы область клика не перебивалась звездой
        if (isQ2BTNActive) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_TWO_ACTIVE)
                .attr('x', xScale(q2QuarterImg.x))
                .attr('y', yScale(q2QuarterImg.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickQuarter('q2'));
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_TWO_BASE)
                .attr('x', xScale(q2QuarterImg.x))
                .attr('y', yScale(q2QuarterImg.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickQuarter('q2'));
        }

        //Отрисовка Expert
        if (!checkCodeExpert(achievements)) {
            // no achievement
        } else if (checkCodeExpert(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_ACTIVE)
                .attr('x', xScale(q2Expert.x))
                .attr('y', yScale(q2Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_BASE)
                .attr('x', xScale(q2Expert.x))
                .attr('y', yScale(q2Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        }
    }
};