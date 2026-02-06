import type { ScaleLinear } from 'd3-scale';
import type { Selection } from 'd3-selection';
import type { IAnyParams, sizeWindowType, StarDataQuarter, StarrySkyQuarterAchievement } from '../types';
import { checkCodeAntiCase, checkCodeAntiControl, checkCodeBook, checkCodeBox, checkCodeCup, checkCodeDiplom, checkCodeEducation, checkCodeExpert, checkCodeGiftBox, checkCodeLike, checkCodeMentor, getLineMap } from '.';
import { ALL_START_QUARTERS, COSMO_CAT_QUARTER_STARRY_SKY, STARRY_SKY_ACHIEVEMENTS_CODE, STARRY_SKY_IMAGES_PRESENTS, STARRY_SKY_QUORTERS } from '../constants';

const LINE_COORDINATES = [
    [1, 2],
    [1, 4],
    [2, 3],
    [3, 4],
    [4, 5],
];

const CONTACT_STARS = [
    [0, 1],
    [0, 3],
    [1, 2],
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
    [17, 18],
];

// Координаты углов(точек)
const starsCoordinatesQ4New = [
    { id: 1, x: 568, y: 278 },
    { id: 2, x: 590, y: 296 },
    { id: 3, x: 656, y: 284 },
    { id: 4, x: 716, y: 293 },
    { id: 5, x: 790, y: 264 },
    { id: 6, x: 896, y: 310 },
    { id: 7, x: 928, y: 194 },
    { id: 8, x: 924, y: 115 },
    { id: 9, x: 928, y: 55 },
    { id: 10, x: 772, y: 52 },
    { id: 11, x: 745, y: 70 },
    { id: 12, x: 705, y: 56 },
    { id: 13, x: 615, y: 62 },
    { id: 14, x: 544, y: 20 },
    { id: 15, x: 477, y: 112 },
    { id: 16, x: 550, y: 174 },
    { id: 17, x: 568, y: 278 },
];

//([x - Number star, y - Number Next star, z - type line ])
const q4QuarterImg = { x: 820, y: 280 };
const q4Diplom = { x: 525, y: 133 };
const q4Mentor = { x: 680, y: 130 };
const q4Box = { x: 865, y: 120 };
const q4Book = { x: 540, y: 100 };
const q4Like = { x: 667, y: 273 };
const q4AntiControl = { x: 830, y: 200 };
const q4AntiCase = { x: 740, y: 162 };
const q4GiftBox = { x: 610, y: 155 };
const q4Cup = { x: 730, y: 265 };
const q4Plug = { x: 570, y: 290 };
const q4Expert = { x: 600, y: 230 };

export const renderFourQuarter = (
    svg: Selection<SVGElement, unknown, null, undefined>,
    isQ4Active: boolean,
    isQ4BTNActive: boolean,
    achievements: Array<StarrySkyQuarterAchievement>,
    starsCoordinatesQ4: Array<StarDataQuarter>,
    xScale: ScaleLinear<number, number, number>,
    yScale: ScaleLinear<number, number, number>,
    goToPage: (url: string, params: IAnyParams, writeHistory?: boolean, deleteParams?: string[]) => void,
    isQ4ShowPlug: boolean,
    handleClickModalOpen: (type: string, quorter: number) => void,
    handleClickStar: () => void,
    isQ4BTNBlocked: boolean,
    _sizeWindow: sizeWindowType,
    diplomCountFourQuarter: number,
) => {
    const lineMap = getLineMap(starsCoordinatesQ4, CONTACT_STARS);

    const refactorCoordinateStar = (type: 'base' | 'active') => (type === 'base' ? 11 : 58);
    const refactorTypeStar = (type: 'base' | 'active') =>
        type === 'base' ? STARRY_SKY_IMAGES_PRESENTS.STAR : STARRY_SKY_IMAGES_PRESENTS.GLOWING_STAR;
    const handleClickQuarter = (quarter: string): void => {
        !isQ4BTNBlocked && goToPage('/starry-sky/quarter', { quarter }, true);
    };

    // Обработчики ачивок
    const handleClickDiplom = () => {
        handleClickModalOpen('diplom' + `${diplomCountFourQuarter}`, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickEducation = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOX, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickGiftBox = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.GIFT_BOX, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickCup = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.CUP, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickMentor = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.MENTOR, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickBook = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.BOOK, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickLike = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.LIKE, STARRY_SKY_QUORTERS.FOURTH);
    };

    const handleClickAntiControl = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CONTROL, STARRY_SKY_QUORTERS.FOURTH);
    };
    const handleClickAntiCase = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CASE, STARRY_SKY_QUORTERS.FOURTH);
    };

    const handleClickExpert = () => {
        handleClickModalOpen(STARRY_SKY_ACHIEVEMENTS_CODE.EXPERT, STARRY_SKY_QUORTERS.FOURTH);
    };

    const handleClickStars = (index: number) => {
        const classShow = 'starry-sky-main-chart__text-star--show';
        const el = document.getElementById(`text-star-four${index}`);
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

    /** Проверка на обводку области квартала */
    if (isQ4Active) {
        STROKE_LINE_COORDINATES.map(([a, b]) => {
            const P1 = starsCoordinatesQ4New.find(el => el.id === a);
            const P2 = starsCoordinatesQ4New.find(el => el.id === b);

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
    if (isQ4ShowPlug) {
        svg.append('svg:image')
            .attr('xlink:href', COSMO_CAT_QUARTER_STARRY_SKY)
            .attr('x', xScale(q4Plug.x))
            .attr('y', yScale(q4Plug.y));
    } else {
        LINE_COORDINATES.map(([a, b], index) => {
            const P1 = starsCoordinatesQ4.find(el => el.id === a);
            const P2 = starsCoordinatesQ4.find(el => el.id === b);
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
        starsCoordinatesQ4.map((d, index) => {
            svg.append('svg:image')
                .attr('xlink:href', refactorTypeStar(d.type))
                .attr('x', xScale(d.x) - refactorCoordinateStar(d.type))
                .attr('y', yScale(d.y) - refactorCoordinateStar(d.type))
                .attr('star-Modal.tsx', index)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickStars(index));
            svg.append('text')
                .attr('class', () => 'starry-sky-main-chart__text-star starry-sky-main-chart__text-star--hide')
                .attr('id', () => `text-star-four${index}`)
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
                .attr('x', xScale(q4Diplom.x) - 15)
                .attr('y', yScale(q4Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountFourQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q4Diplom.x) + 18)
                    .attr('y', yScale(q4Diplom.y) + 22)
                    .text(`${diplomCountFourQuarter}x`);
            }
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.DIPLOM_BASE)
                .attr('x', xScale(q4Diplom.x) - 15)
                .attr('y', yScale(q4Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickDiplom());
            if (diplomCountFourQuarter) {
                svg.append('g')
                    .append('text')
                    .attr('class', 'starry-sky__diplom_l')
                    .attr('x', xScale(q4Diplom.x) + 18)
                    .attr('y', yScale(q4Diplom.y) + 22)
                    .text(`${diplomCountFourQuarter}x`);
            }
        }
        //Отрисовка Education
        if (!checkCodeEducation(achievements)) {
            // no achievement
        } else if (checkCodeEducation(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_ACTIVE)
                .attr('x', xScale(q4Diplom.x) - 20)
                .attr('y', yScale(q4Diplom.y) - 15)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EDUCATION_BASE)
                .attr('x', xScale(q4Diplom.x) - 15)
                .attr('y', yScale(q4Diplom.y) - 12)
                .attr('cursor', 'pointer')
                .on('click', () => handleClickEducation());
        }
        //Отрисовка коробки
        if (!checkCodeBox(achievements)) {
            // no achievement
        } else if (checkCodeBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_ACTIVE_INVERTED)
                .attr('x', xScale(q4Box.x))
                .attr('y', yScale(q4Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOX_BASE_INVERTED)
                .attr('x', xScale(q4Box.x))
                .attr('y', yScale(q4Box.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBox());
        }

        // Отрисовка ментора
        if (!checkCodeMentor(achievements)) {
            // no achievement
        } else if (checkCodeMentor(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_ACTIVE)
                .attr('x', xScale(q4Mentor.x))
                .attr('y', yScale(q4Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.MENTOR_BASE)
                .attr('x', xScale(q4Mentor.x))
                .attr('y', yScale(q4Mentor.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickMentor());
        }

        //Отрисовка подарка
        if (!checkCodeGiftBox(achievements)) {
            // no achievement
        } else if (checkCodeGiftBox(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_ACTIVE)
                .attr('x', xScale(q4GiftBox.x))
                .attr('y', yScale(q4GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.GIFT_BOX_BASE)
                .attr('x', xScale(q4GiftBox.x))
                .attr('y', yScale(q4GiftBox.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickGiftBox());
        }

        //Отрисовка кубка
        if (!checkCodeCup(achievements)) {
            // no achievement
        } else if (checkCodeCup(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_ACTIVE)
                .attr('x', xScale(q4Cup.x))
                .attr('y', yScale(q4Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.CUP_BASE)
                .attr('x', xScale(q4Cup.x))
                .attr('y', yScale(q4Cup.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickCup());
        }
        //Отрисовка Книги
        if (!checkCodeBook(achievements)) {
            // no achievement
        } else if (checkCodeBook(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_ACTIVE)
                .attr('x', xScale(q4Book.x))
                .attr('y', yScale(q4Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.BOOK_BASE)
                .attr('x', xScale(q4Book.x))
                .attr('y', yScale(q4Book.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickBook());
        }

        //Отрисовка Like
        if (!checkCodeLike(achievements)) {
            // no achievement
        } else if (checkCodeLike(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_ACTIVE)
                .attr('x', xScale(q4Like.x))
                .attr('y', yScale(q4Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.LIKE_BASE)
                .attr('x', xScale(q4Like.x))
                .attr('y', yScale(q4Like.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickLike());
        }

        //Отрисовка AntiControl
        if (!checkCodeAntiControl(achievements)) {
            // no achievement
        } else if (checkCodeAntiControl(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_ACTIVE_INVERTED)
                .attr('x', xScale(q4AntiControl.x))
                .attr('y', yScale(q4AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CONTROL_BASE_INVERTED)
                .attr('x', xScale(q4AntiControl.x))
                .attr('y', yScale(q4AntiControl.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiControl());
        }

        //Отрисовка AntiCase
        if (!checkCodeAntiCase(achievements)) {
            // no achievement
        } else if (checkCodeAntiCase(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_ACTIVE)
                .attr('x', xScale(q4AntiCase.x))
                .attr('y', yScale(q4AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.ANTI_CASE_BASE)
                .attr('x', xScale(q4AntiCase.x))
                .attr('y', yScale(q4AntiCase.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickAntiCase());
        }

        // последняя, т.к. перебивается область клика звездой
        /** Проверка на вывод Кнопки квартала */
        if (isQ4BTNActive) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_FOUR_ACTIVE)
                .attr('x', xScale(q4QuarterImg.x))
                .attr('y', yScale(q4QuarterImg.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickQuarter('q4'));
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.QUARTER_FOUR_BASE)
                .attr('x', xScale(q4QuarterImg.x))
                .attr('y', yScale(q4QuarterImg.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickQuarter('q4'));
        }

        //Отрисовка Expert
        if (!checkCodeExpert(achievements)) {
            // no achievement
        } else if (checkCodeExpert(achievements)?.isBright) {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_ACTIVE_INVERTED)
                .attr('x', xScale(q4Expert.x))
                .attr('y', yScale(q4Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        } else {
            svg.append('svg:image')
                .attr('xlink:href', STARRY_SKY_IMAGES_PRESENTS.EXPERT_BASE_INVERTED)
                .attr('x', xScale(q4Expert.x))
                .attr('y', yScale(q4Expert.y))
                .attr('cursor', 'pointer')
                .on('click', () => handleClickExpert());
        }
    }
};