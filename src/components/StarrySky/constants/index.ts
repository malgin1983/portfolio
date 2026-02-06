import type { IStarData, StarDataQuarter, TableStarsData } from "../types";
import { SVG_URLS } from "../svg/urls";

export const starrySkyData = {
    metadata: {
        year: 2025,
        posKey: '3000',
    },
    yearStar: {
        brightLevel: 0,
    },
    quarters: [
        {
            quarter: 1,
            isValid: true,
            quarterTitle: 'Рекомендации 1q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: 'qwertyйцукен123!@#$%^&*()',
                        isBright: false,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom1',
                        isBright: false,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Античемодан3',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown:
                            '##Приоритеты \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown:
                            '##Качество \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 2,
            isValid: true,
            quarterTitle: 'Рекомендации 2q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Античемодан4',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: true,
                        popupPriority: 0,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 3,
            isValid: true,
            quarterTitle: 'Рекомендации 3q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: 'qwertyйцукен123!@#$%^&*()',
                        isBright: true,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: true,
                        popupPriority: 9,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Ты лучший',
                        isVisibleOnPopup: true,
                        popupPriority: 8,
                        screenTitle: 'Ты лучший',
                        screenDescMarkdown:
                            'Чтобы стать финалистом конкурса, тебе нужно:\n- войти в ТОП-2\n- набрать больше всех баллов и заработать 5 звезд в первом и во втором квартале 2023 года\n\nА также соответствовать критериям:\n- Стаж непрерывной работы в Банке не менее 1 года в должности\n- Отсутствие дисциплинарных взысканий за 12 мес. предшествующих конкурсу\n- Оценка за Результативность и Ценности, по Системе 5+ (за квартал / год в течение 12 месяцев, предшествующих Конкурсу), не ниже С. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum pretium diam vel convallis. Morbi sit amet tempor metus. Sed sagittis libero ut ligula cursus, a ultricies velit fermentum. Nunc convallis finibus augue, eu iaculis odio sagittis et. Mauris quis nisl consequat, faucibus metus eu, aliquet lorem. Mauris ornare augue justo, eget facilisis libero pellentesque bibendum. Nulla vehicula bibendum malesuada. Nullam non nulla vel tellus tincidunt tempus eget in dolor. Proin est lorem, vulputate quis arcu eget, luctus accumsan dolor.',
                        count: 1,
                        code: 'cup',
                        isBright: true,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 8,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom1',
                        isBright: false,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 6,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom5',
                        isBright: false,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Античемодан',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: true,
                    },
                    {
                        groupName: 'Привилегии',
                        isVisibleOnPopup: true,
                        popupPriority: 5,
                        screenTitle: 'Привилегии',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим коробку из под холодильника!',
                        count: 1,
                        code: 'box',
                        isBright: true,
                    },
                    {
                        groupName: 'Развитие',
                        isVisibleOnPopup: true,
                        popupPriority: 7,
                        screenTitle: 'Развитие',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань букварем!',
                        count: 1,
                        code: 'book',
                        isBright: false,
                    },
                    {
                        groupName: 'Вечерний антиконтроль',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Вечерний антиконтроль',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань контролером трамвая!',
                        count: 1,
                        code: 'antiСontrol',
                        isBright: true,
                    },
                    {
                        groupName: 'Эксперт',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Эксперт',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим медальку!',
                        count: 1,
                        code: 'expert',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown:
                            '##Качество \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown:
                            '##Развитие \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 4,
            isValid: true,
            quarterTitle: 'Рекомендации 4q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: false,
                        popupPriority: 7,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: '',
                        isBright: false,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: false,
                        popupPriority: 2,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Античемодан',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: true,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: false,
                    },
                    {
                        groupName: 'Привилегии',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Привилегии',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим коробку из под холодильника!',
                        count: 1,
                        code: 'box',
                        isBright: true,
                    },
                    {
                        groupName: 'Развитие',
                        isVisibleOnPopup: false,
                        popupPriority: 6,
                        screenTitle: 'Развитие',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань букварем!',
                        count: 1,
                        code: 'book',
                        isBright: false,
                    },
                    {
                        groupName: 'Вечерний антиконтроль',
                        isVisibleOnPopup: false,
                        popupPriority: 5,
                        screenTitle: 'Вечерний антиконтроль',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань контролером трамвая!',
                        count: 4,
                        code: 'antiСontrol',
                        isBright: true,
                    },
                    {
                        groupName: 'Эксперт',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Эксперт',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим медальку!',
                        count: 1,
                        code: 'expert',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown:
                            '##Приоритеты \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
    ],
};

export enum STARRY_SKY_ACHIEVEMENTS_CODE {
    DIPLOM_ONE = 'diplom1',
    DIPLOM_TWO = 'diplom2',
    DIPLOM_THREE = 'diplom3',
    DIPLOM_FOUR = 'diplom4',
    DIPLOM_FIVE = 'diplom5',
    MENTOR = 'mentor',
    GIFT_BOX = 'giftBox',
    CUP = 'cup',
    LIKE = 'like',
    ANTI_CONTROL = 'antiСontrol',
    ANTI_CASE = 'antiCase',
    BOOK = 'book',
    BOX = 'box',
    EDUCATION = 'education',
    EXPERT = 'expert',
}

const firstQuarter = [
    `text-star-one${0}`,
    `text-star-one${1}`,
    `text-star-one${2}`,
    `text-star-one${3}`,
    `text-star-one${4}`,
];

const secondQuarter = [
    `text-star-two${0}`,
    `text-star-two${1}`,
    `text-star-two${2}`,
    `text-star-two${3}`,
    `text-star-two${4}`,
];

const thirdQuarter = [
    `text-star-three${0}`,
    `text-star-three${1}`,
    `text-star-three${2}`,
    `text-star-three${3}`,
    `text-star-three${4}`,
];

const fourQuarter = [
    `text-star-four${0}`,
    `text-star-four${1}`,
    `text-star-four${2}`,
    `text-star-four${3}`,
    `text-star-four${4}`,
];

export const ALL_START_QUARTERS = [...firstQuarter, ...secondQuarter, ...thirdQuarter, ...fourQuarter];

export const ALL_DIPLOMS_TYPES = [
    STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_ONE,
    STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_TWO,
    STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_THREE,
    STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_FOUR,
    STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_FIVE,
];

//
export enum STARRY_SKY_QUORTERS {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    FOURTH = 4,
}

export const STARRY_SKY_IMAGES_PRESENTS = SVG_URLS;
export const COSMO_CAT_QUARTER_STARRY_SKY = SVG_URLS.COSMO_CAT_QUARTER_STARRY_SKY;
export const STARRY_SKY_YEAR_STAR_URLS = [
    SVG_URLS.YEAR_STAR,
    SVG_URLS.YEAR_STAR_Q1,
    SVG_URLS.YEAR_STAR_Q2,
    SVG_URLS.YEAR_STAR_Q3,
    SVG_URLS.YEAR_STAR_Q4,
] as const;

export const STARS_COORDINATES_Q1_TEMPLATE: Array<StarDataQuarter> = [
    {
        id: 1,
        x: 63,
        y: 366,
        type: 'base',
        quarter: 'q1',
        name: 'quality',
    },
    {
        id: 2,
        x: 153,
        y: 461,
        type: 'base',
        quarter: 'q1',
        name: 'priorities',
    },
    {
        id: 3,
        x: 198,
        y: 382,
        type: 'base',
        quarter: 'q1',
        name: 'development',
    },
    {
        id: 4,
        x: 293,
        y: 436,
        type: 'base',
        quarter: 'q1',
        name: 'model',
    },
    {
        id: 5,
        x: 337,
        y: 354,
        type: 'base',
        quarter: 'q1',
        name: 'show-case',
    },
];
export const STARS_COORDINATES_Q2_TEMPLATE: Array<StarDataQuarter> = [
    {
        id: 1,
        x: 600,
        y: 364,
        type: 'base',
        quarter: 'q2',
        name: 'development',
    },
    {
        id: 2,
        x: 672,
        y: 476,
        type: 'base',
        quarter: 'q2',
        name: 'model',
    },
    {
        id: 3,
        x: 702,
        y: 409,
        type: 'base',
        quarter: 'q2',
        name: 'quality',
    },
    {
        id: 4,
        x: 770,
        y: 357,
        type: 'base',
        quarter: 'q2',
        name: 'priorities',
    },
    {
        id: 5,
        x: 805,
        y: 497,
        type: 'base',
        quarter: 'q2',
        name: 'show-case',
    },
];
export const STARS_COORDINATES_Q3_TEMPLATE: Array<StarDataQuarter> = [
    {
        id: 1,
        x: 58,
        y: 116,
        type: 'base',
        quarter: 'q3',
        name: 'priorities',
    },
    {
        id: 2,
        x: 185,
        y: 167,
        type: 'base',
        quarter: 'q3',
        name: 'development',
    },
    {
        id: 3,
        x: 245,
        y: 88,
        type: 'base',
        quarter: 'q3',
        name: 'show-case',
    },
    {
        id: 4,
        x: 284,
        y: 225,
        type: 'base',
        quarter: 'q3',
        name: 'quality',
    },
    {
        id: 5,
        x: 313,
        y: 166,
        type: 'base',
        quarter: 'q3',
        name: 'model',
    },
];
export const STARS_COORDINATES_Q4_TEMPLATE: Array<StarDataQuarter> = [
    {
        id: 1,
        x: 575,
        y: 165,
        type: 'base',
        quarter: 'q4',
        name: 'quality',
    },
    {
        id: 2,
        x: 601,
        y: 265,
        type: 'base',
        quarter: 'q4',
        name: 'model',
    },
    {
        id: 3,
        x: 665,
        y: 216,
        type: 'base',
        quarter: 'q4',
        name: 'priorities',
    },
    {
        id: 4,
        x: 819,
        y: 198,
        type: 'base',
        quarter: 'q4',
        name: 'show-case',
    },
    {
        id: 5,
        x: 810,
        y: 115,
        type: 'base',
        quarter: 'q4',
        name: 'development',
    },
];
const STAR_X_COORDINATE = [90, 260, 430, 610, 780];
const QUARTER_X = 24;

export const STARS_COORDINATES_YEAR_CHART: TableStarsData = {
    q1: [
        {
            id: 0,
            x: STAR_X_COORDINATE[0],
            y: 160,
            type: 'base',
            quarter: 'q1',
        },
        {
            id: 1,
            x: STAR_X_COORDINATE[1],
            y: 160,
            type: 'base',
            quarter: 'q1',
        },
        {
            id: 2,
            x: STAR_X_COORDINATE[2],
            y: 160,
            type: 'base',
            quarter: 'q1',
        },
        {
            id: 3,
            x: STAR_X_COORDINATE[3],
            y: 160,
            type: 'base',
            quarter: 'q1',
        },
        {
            id: 4,
            x: STAR_X_COORDINATE[4],
            y: 160,
            type: 'base',
            quarter: 'q1',
        },
    ],
    q2: [
        {
            id: 0,
            x: STAR_X_COORDINATE[0],
            y: 118,
            type: 'base',
            quarter: 'q2',
        },
        {
            id: 1,
            x: STAR_X_COORDINATE[1],
            y: 118,
            type: 'base',
            quarter: 'q2',
        },
        {
            id: 2,
            x: STAR_X_COORDINATE[2],
            y: 118,
            type: 'base',
            quarter: 'q2',
        },
        {
            id: 3,
            x: STAR_X_COORDINATE[3],
            y: 118,
            type: 'base',
            quarter: 'q2',
        },
        {
            id: 4,
            x: STAR_X_COORDINATE[4],
            y: 118,
            type: 'base',
            quarter: 'q2',
        },
    ],
    q3: [
        {
            id: 0,
            x: STAR_X_COORDINATE[0],
            y: 75,
            type: 'base',
            quarter: 'q3',
        },
        {
            id: 1,
            x: STAR_X_COORDINATE[1],
            y: 75,
            type: 'base',
            quarter: 'q3',
        },
        {
            id: 2,
            x: STAR_X_COORDINATE[2],
            y: 75,
            type: 'base',
            quarter: 'q3',
        },
        {
            id: 3,
            x: STAR_X_COORDINATE[3],
            y: 75,
            type: 'base',
            quarter: 'q3',
        },
        {
            id: 4,
            x: STAR_X_COORDINATE[4],
            y: 75,
            type: 'base',
            quarter: 'q3',
        },
    ],
    q4: [
        {
            id: 0,
            x: STAR_X_COORDINATE[0],
            y: 32,
            type: 'base',
            quarter: 'q4',
        },
        {
            id: 1,
            x: STAR_X_COORDINATE[1],
            y: 32,
            type: 'base',
            quarter: 'q4',
        },
        {
            id: 2,
            x: STAR_X_COORDINATE[2],
            y: 32,
            type: 'base',
            quarter: 'q4',
        },
        {
            id: 3,
            x: STAR_X_COORDINATE[3],
            y: 32,
            type: 'base',
            quarter: 'q4',
        },
        {
            id: 4,
            x: STAR_X_COORDINATE[4],
            y: 32,
            type: 'base',
            quarter: 'q4',
        },
    ],
};

export const QUARTERS_NAME_COORDINATES_YEAR_CHART = [
    {
        id: 1,
        name: 'Q1',
        x: QUARTER_X,
        y: 160,
    },
    {
        id: 2,
        name: 'Q2',
        x: QUARTER_X,
        y: 116,
    },
    {
        id: 3,
        name: 'Q3',
        x: QUARTER_X,
        y: 73,
    },
    {
        id: 4,
        name: 'Q4',
        x: QUARTER_X,
        y: 30,
    },
];

export enum SKY_RATING_TYPE_CELL {
    NULL,
    TEXT,
    BADGE,
    CHIP,
    BADGE_WITH_INFO,
}

export const ME_USER_COLOR_BACKGROUND = 1;
export const FIRST_THREE_USER_COLOR_BACKGROUND = 2;

export const starrySkyQuarters = {
    metadata: {
        year: 2025,
        posKey: '3000',
    },
    yearStar: {
        brightLevel: 0,
    },
    quarters: [
        {
            quarter: 1,
            isValid: true,
            quarterTitle: 'Рекомендации 1q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: 'qwertyйцукен123!@#$%^&*()',
                        isBright: false,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom1',
                        isBright: false,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Античемодан3',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown:
                            '##Приоритеты \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown:
                            '##Качество \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 2,
            isValid: true,
            quarterTitle: 'Рекомендации 2q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Античемодан4',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: true,
                        popupPriority: 0,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 3,
            isValid: true,
            quarterTitle: 'Рекомендации 3q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: 'qwertyйцукен123!@#$%^&*()',
                        isBright: true,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: true,
                        popupPriority: 9,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Ты лучший',
                        isVisibleOnPopup: true,
                        popupPriority: 8,
                        screenTitle: 'Ты лучший',
                        screenDescMarkdown:
                            'Чтобы стать финалистом конкурса, тебе нужно:\n- войти в ТОП-2\n- набрать больше всех баллов и заработать 5 звезд в первом и во втором квартале 2023 года\n\nА также соответствовать критериям:\n- Стаж непрерывной работы в Банке не менее 1 года в должности\n- Отсутствие дисциплинарных взысканий за 12 мес. предшествующих конкурсу\n- Оценка за Результативность и Ценности, по Системе 5+ (за квартал / год в течение 12 месяцев, предшествующих Конкурсу), не ниже С. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum pretium diam vel convallis. Morbi sit amet tempor metus. Sed sagittis libero ut ligula cursus, a ultricies velit fermentum. Nunc convallis finibus augue, eu iaculis odio sagittis et. Mauris quis nisl consequat, faucibus metus eu, aliquet lorem. Mauris ornare augue justo, eget facilisis libero pellentesque bibendum. Nulla vehicula bibendum malesuada. Nullam non nulla vel tellus tincidunt tempus eget in dolor. Proin est lorem, vulputate quis arcu eget, luctus accumsan dolor.',
                        count: 1,
                        code: 'cup',
                        isBright: true,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 8,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom1',
                        isBright: false,
                    },
                    {
                        groupName: 'Грамота',
                        isVisibleOnPopup: true,
                        popupPriority: 6,
                        screenTitle: 'Диплом',
                        screenDescMarkdown:
                            'Чтобы получить звездную грамоту, тебе нужно получить все пять звезд в текущем квартале.',
                        count: 1,
                        code: 'diplom5',
                        isBright: false,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Античемодан',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: false,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: true,
                    },
                    {
                        groupName: 'Привилегии',
                        isVisibleOnPopup: true,
                        popupPriority: 5,
                        screenTitle: 'Привилегии',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим коробку из под холодильника!',
                        count: 1,
                        code: 'box',
                        isBright: true,
                    },
                    {
                        groupName: 'Развитие',
                        isVisibleOnPopup: true,
                        popupPriority: 7,
                        screenTitle: 'Развитие',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань букварем!',
                        count: 1,
                        code: 'book',
                        isBright: false,
                    },
                    {
                        groupName: 'Вечерний антиконтроль',
                        isVisibleOnPopup: true,
                        popupPriority: 2,
                        screenTitle: 'Вечерний антиконтроль',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань контролером трамвая!',
                        count: 1,
                        code: 'antiСontrol',
                        isBright: true,
                    },
                    {
                        groupName: 'Эксперт',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Эксперт',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим медальку!',
                        count: 1,
                        code: 'expert',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown:
                            '##Качество \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown:
                            '##Развитие \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                ],
            },
        },
        {
            quarter: 4,
            isValid: true,
            quarterTitle: 'Рекомендации 4q 2025',
            elements: {
                achievements: [
                    {
                        groupName: 'Подарок',
                        isVisibleOnPopup: false,
                        popupPriority: 7,
                        screenTitle: 'Подарок',
                        count: 1,
                        code: 'giftBox',
                        screenDescMarkdown: 'Получи в этом квартале 5 звезд, войди в ТОП-20 рейтинга и подарок твой!',
                        promoCode: '',
                        isBright: false,
                    },
                    {
                        groupName: 'Преемник',
                        isVisibleOnPopup: false,
                        popupPriority: 2,
                        screenTitle: 'Преемник',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань преемником!',
                        count: 1,
                        code: 'mentor',
                        isBright: true,
                    },
                    {
                        groupName: 'Античемодан',
                        isVisibleOnPopup: true,
                        popupPriority: 3,
                        screenTitle: 'Античемодан',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань чемоданом!',
                        count: 1,
                        code: 'antiCase',
                        isBright: true,
                    },
                    {
                        groupName: 'Почетный статус',
                        isVisibleOnPopup: false,
                        popupPriority: 1,
                        screenTitle: 'Почетный статус',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и получи почетный статус звезды ММБ!',
                        count: 1,
                        code: 'like',
                        isBright: false,
                    },
                    {
                        groupName: 'Привилегии',
                        isVisibleOnPopup: false,
                        popupPriority: 0,
                        screenTitle: 'Привилегии',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим коробку из под холодильника!',
                        count: 1,
                        code: 'box',
                        isBright: true,
                    },
                    {
                        groupName: 'Развитие',
                        isVisibleOnPopup: false,
                        popupPriority: 6,
                        screenTitle: 'Развитие',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань букварем!',
                        count: 1,
                        code: 'book',
                        isBright: false,
                    },
                    {
                        groupName: 'Вечерний антиконтроль',
                        isVisibleOnPopup: false,
                        popupPriority: 5,
                        screenTitle: 'Вечерний антиконтроль',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и стань контролером трамвая!',
                        count: 4,
                        code: 'antiСontrol',
                        isBright: true,
                    },
                    {
                        groupName: 'Эксперт',
                        isVisibleOnPopup: true,
                        popupPriority: 4,
                        screenTitle: 'Эксперт',
                        screenDescMarkdown:
                            'Только лучший достоин этой преференции!\n\nПолучи пять звезд три квартала из четырех в году и мы подарим медальку!',
                        count: 1,
                        code: 'expert',
                        isBright: false,
                    },
                ],
                quarterStars: [
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 1,
                        tooltip: 'Витрина',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 2,
                        tooltip: 'Модель',
                        screenDescMarkdown:
                            '##Модель \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 3,
                        tooltip: 'Приоритеты',
                        screenDescMarkdown:
                            '##Приоритеты \n Мы находимся в середине квартала и время идет быстро. Чтобы достать звезду с неба, тебе необходимо достигнуть показателя RR 100% и уделить особое внимание выполнению показателю - Доля новых КК. Действуй и будешь как Стас Михайлов!',
                        isBright: false,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 4,
                        tooltip: 'Качество',
                        screenDescMarkdown: null,
                        isBright: true,
                    },
                    {
                        groupName: 'Звезды',
                        isVisibleOnPopup: null,
                        popupPriority: null,
                        coordinates: 5,
                        tooltip: 'Развитие',
                        screenDescMarkdown: null,
                        isBright: false,
                    },
                ],
            },
        },
    ],
};

export const coordinatesLine: Array<IStarData> = [
    {
        id: 15, //15 -> 1 квартал  5 номер звезды
        x: 337,
        y: 354,
        type: 'active',
    },
    {
        id: 21,
        x: 580,
        y: 364,
        type: 'base',
    },
    {
        id: 42,
        x: 601,
        y: 265,
        type: 'base',
    },
    {
        id: 41,
        x: 575,
        y: 165,
        type: 'base',
    },
    {
        id: 35,
        x: 313,
        y: 166,
        type: 'base',
    },
    {
        id: 34,
        x: 284,
        y: 225,
        type: 'base',
    },
];