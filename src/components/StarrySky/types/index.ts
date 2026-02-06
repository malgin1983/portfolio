import type { STARRY_SKY_ACHIEVEMENTS_CODE } from "../constants";

export interface IStarrySkyMainChart {
    dimensions: {
        width: number;
        height: number;
    };
    targetYear: number;
}

export interface IStarData {
        id: number;
        x: number;
        y: number;
        type: string;
}

export interface IAnyParams {
    [param: string]: string | number;
}

export type ShowCaseRecommendationType = 'show-case' | 'priorities' | 'model' | 'quality' | 'development';
export type StarrySkyQuorters = 'q1' | 'q2' | 'q3' | 'q4';
export interface StarData {
    id: number;
    x: number;
    y: number;
    type: 'base' | 'active';
}
export interface StarDataQuarter extends StarData {
    name: ShowCaseRecommendationType;
    quarter: StarrySkyQuorters;
    tooltip?: string;
    coordinates?: number;
}

export interface StarrySkyQuarterAchievement {
    code: STARRY_SKY_ACHIEVEMENTS_CODE;
    groupName: string;
    count: number;
    screenTitle: string;
    screenDescription?: string;
    isBright: boolean;
    screenDescMarkdown?: string;
    promoCode?: string;
}

export interface StarDataTable extends StarData {
    quarter: StarrySkyQuorters;
}

export type TableStarsData = {
    [k in StarrySkyQuorters] : StarDataTable[];
}

export type sizeWindowType = 's' | 'm' | 'l' | 'xl';

export interface StarrySkyQuarterStar {
    groupName: string;
    coordinates: number;
    isBright: boolean;
    tooltip: string;
    screenTitle?: string;
    screenDescMarkdown?: string | null;
    motivationText?: string;
}