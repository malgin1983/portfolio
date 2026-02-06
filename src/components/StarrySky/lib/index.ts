import type { sizeWindowType, StarDataQuarter, StarrySkyQuarterAchievement } from '../types';
import { ALL_DIPLOMS_TYPES, STARRY_SKY_ACHIEVEMENTS_CODE } from '../constants';

export const getCountDiplom = (achievements: StarrySkyQuarterAchievement[]): number | null => {
    const targetAchievement = achievements?.filter(a =>
        ALL_DIPLOMS_TYPES.includes(a?.code as STARRY_SKY_ACHIEVEMENTS_CODE),
    );
    if (!targetAchievement?.length) return null;
    switch (targetAchievement[0]?.code) {
        case STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_ONE: {
            return 1;
        }
        case STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_TWO: {
            return 2;
        }
        case STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_THREE: {
            return 3;
        }
        case STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_FOUR: {
            return 4;
        }
        case STARRY_SKY_ACHIEVEMENTS_CODE.DIPLOM_FIVE: {
            return 5;
        }
        default: {
            return null;
        }
    }
};

/** Функции для фильтрации полученных с сервера ачивок по всем возможным значениям поля code */
export const checkCodeBox = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.BOX);
};

export const checkCodeCup = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.CUP);
};

export const checkCodeDiplom = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => ALL_DIPLOMS_TYPES.includes(a?.code as STARRY_SKY_ACHIEVEMENTS_CODE));
};

export const checkCodeEducation = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION);
};

export const checkCodeGiftBox = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.GIFT_BOX);
};

export const checkCodeMentor = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.MENTOR);
};

export const checkCodeBook = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.BOOK);
};

export const checkCodeLike = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.LIKE);
};

export const checkCodeAntiControl = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CONTROL);
};

export const checkCodeAntiCase = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.ANTI_CASE);
};
export const checkCodeExpert = (achievements: Array<StarrySkyQuarterAchievement>): StarrySkyQuarterAchievement | undefined => {
    return achievements.find(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.EXPERT);
};

//  Отфильтровка на фронте данных по diplom и education для роли  CKRKM (лучше перенести на бэк)
export const filteredAchievementsByEducation = (
    achievements: StarrySkyQuarterAchievement[],
    switchDiplomToEducation: boolean,
): StarrySkyQuarterAchievement[] => {
    if (switchDiplomToEducation) {
        const isEducationEnabled = !!achievements.filter(a => a?.code === STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION)
            .length;
        return isEducationEnabled ? achievements.filter(a => !ALL_DIPLOMS_TYPES.includes(a?.code)) : achievements;
    } else {
        return achievements?.filter(a => a?.code !== STARRY_SKY_ACHIEVEMENTS_CODE.EDUCATION);
    }
};

export const getLineMap = (quarterArray: Array<StarDataQuarter>, contactArray: Array<Array<number>>): Array<boolean> =>
    contactArray.map(
        ([firstStar, secondStar]) =>
            quarterArray[firstStar]?.type === 'active' && quarterArray[secondStar]?.type === 'active',
    );

    export const translateSizeBlock = (width: number): sizeWindowType => {
        if (width <= 942) return 's';
        if (width > 942 && width <= 980) return 'm';
        if (width > 980 && width <= 1300) return 'l';
        if (width > 1300) return 'xl';
        return 'l'
    };