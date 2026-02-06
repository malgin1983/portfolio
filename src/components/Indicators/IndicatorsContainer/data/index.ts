export interface BaseIndicatorDetail {
    rdt: string | null;
    visualizationType: number;
    title: string;
    factName: string;
    receivedPointsName: string | null;
    planName: string;
    factMain: number;
    planMain: number;
    measureMain: string | null;
    measureMain3Layer: string | null;
    factDetail: string | null;
    planDetail: string | null;
    planPointsValue: string | null;
    measureDetail3Layer: string | null;
    measureDetail: string | null;
    receivedPointsValue: string;
    isStarReceived: boolean;
    planMain1monthQuarter?: number | null;
    planMain2monthQuarter?: number | null;
    isTempOk: boolean;
    planMain1weekQuarter?: number | null;
    planMain2weekQuarter?: number | null;
    tempColor?: string | null;
    metricValue: number | null;
    measureName: string | null;
    planValue: number | null;
    execution: number | null;
    executionRR: number | null;
    planPointsName: string | null;
    isStarEnabled: boolean;
    redirectTo: string | null;
    maxValueMain?: number | null;
    planMain1MonthQuarter?: number | null;
    planMain2MonthQuarter?: number | null;
}

/** Поддерживаемые типы индикаторов (для типобезопасного маппинга) */
export type IndicatorType =
    | 'diagramPie'
    | 'diagramPieMetrics'
    | 'diagramShelves'
    | 'diagramShelvesTempo'
    | 'speedometerType_1'
    | 'speedometerType_2'
    | 'speedometerType_3'
    | 'diagramDonat';

// Интерфейс для индикатора
export interface IIndicatorCard {
    indicatorShortName: string;
    metricId: number;
    metricCode: string | null;
    dataSource: string;
    indicatorType: IndicatorType;
    indicatorDetail: BaseIndicatorDetail;
    orderOn1Layer: number | null;
    groupCode: string | null;
    isIndicatorCalculated: boolean;
    orderInGroup: number | null;
    nestedWidgetId: number | null;
    isValid: boolean;
    reason?: string;
}


export const indicatorsData: Array<IIndicatorCard> = [
    {
        indicatorShortName: 'diagramPie',
        metricId: 121,
        metricCode: null,
        dataSource: 'card',
        indicatorType: 'diagramPie',
        indicatorDetail: {
            rdt: '2024-01-29T14:10:47.855',
            visualizationType: 14,
            title: 'Не выполнен',
            factName: 'Факт',
            receivedPointsName: null,
            planName: 'План',
            factMain: 0,
            planMain: 90,
            measureMain: '%',
            measureMain3Layer: null,
            factDetail: null,
            planDetail: null,
            planPointsValue: '-1',
            measureDetail3Layer: null,
            measureDetail: 'встр/д',
            receivedPointsValue: '100',
            isStarReceived: false,
            planMain1monthQuarter: null,
            planMain2monthQuarter: null,
            isTempOk: true,
            planMain1weekQuarter: null,
            planMain2weekQuarter: null,
            tempColor: null,
            metricValue: 78.398,
            measureName: 'кол-во встреч',
            planValue: 100,
            execution: 100.34,
            executionRR: 3589.23,
            planPointsName: 'максимум',
            isStarEnabled: false,
            redirectTo: null,
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: 121,
        isValid: true,
    },
    {
        indicatorShortName: 'diagramDonat',
        metricId: 122,
        metricCode: null,
        dataSource: 'card',
        indicatorType: 'diagramDonat',
        indicatorDetail: {
            rdt: '2024-01-29T14:10:47.855',
            visualizationType: 14,
            title: 'Выполнен',
            factName: 'Факт',
            receivedPointsName: null,
            planName: 'План',
            factMain: 2.3,
            planMain: 2.4,
            measureMain: '%',
            measureMain3Layer: null,
            factDetail: null,
            planDetail: null,
            planPointsValue: '-1',
            measureDetail3Layer: null,
            measureDetail: 'встр/д',
            receivedPointsValue: '100',
            isStarReceived: true,
            planMain1monthQuarter: null,
            planMain2monthQuarter: null,
            isTempOk: true,
            planMain1weekQuarter: null,
            planMain2weekQuarter: null,
            tempColor: null,
            metricValue: 78.398,
            measureName: 'кол-во встреч',
            planValue: 100,
            execution: 100.34,
            executionRR: 3589.23,
            planPointsName: 'максимум',
            isStarEnabled: true,
            redirectTo: null,
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: null,
        isValid: true,
    },
    {
        indicatorShortName: 'speedometerOne',
        metricId: 123,
        metricCode: null,
        dataSource: 'card',
        indicatorType: 'speedometerType_3',
        indicatorDetail: {
            rdt: '2024-01-29T14:10:47.855',
            visualizationType: 14,
            title: 'Больше граничного',
            factName: 'Факт',
            receivedPointsName: null,
            planName: 'План',
            factMain: 0,
            planMain: 1,
            measureMain: '%',
            measureMain3Layer: null,
            factDetail: null,
            planDetail: null,
            planPointsValue: '-1',
            measureDetail3Layer: null,
            measureDetail: 'встр/д',
            receivedPointsValue: '100',
            isStarReceived: true,
            planMain1monthQuarter: null,
            planMain2monthQuarter: null,
            isTempOk: false,
            planMain1weekQuarter: null,
            planMain2weekQuarter: null,
            tempColor: null,
            metricValue: 78.398,
            measureName: 'кол-во встреч',
            planValue: 100,
            execution: 100.34,
            executionRR: 3589.23,
            planPointsName: 'максимум',
            isStarEnabled: true,
            redirectTo: null,
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: null,
        isValid: true,
    },
    {
        indicatorShortName: 'speedometerTwo',
        metricId: 124,
        metricCode: null,
        dataSource: 'card',
        indicatorType: 'speedometerType_2',
        indicatorDetail: {
            rdt: '2024-01-29T14:10:47.855',
            visualizationType: 14,
            title: 'Больше граничного',
            factName: 'Факт',
            receivedPointsName: null,
            planName: 'План',
            factMain: 15,
            planMain: 14,
            measureMain: '%',
            measureMain3Layer: null,
            factDetail: null,
            planDetail: null,
            planPointsValue: '-1',
            measureDetail3Layer: null,
            measureDetail: 'встр/д',
            receivedPointsValue: '100',
            isStarReceived: false,
            planMain1monthQuarter: null,
            planMain2monthQuarter: null,
            isTempOk: false,
            planMain1weekQuarter: null,
            planMain2weekQuarter: null,
            tempColor: null,
            metricValue: 78.398,
            measureName: 'кол-во встреч',
            planValue: 100,
            execution: 100.34,
            executionRR: 3589.23,
            planPointsName: 'максимум',
            isStarEnabled: true,
            redirectTo: null,
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: null,
        isValid: true,
    },
    {
        indicatorShortName: 'speedometerThree',
        metricId: 125,
        metricCode: 'chod',
        dataSource: 'card',
        indicatorType: 'speedometerType_1',
        indicatorDetail: {
            rdt: '2022-03-22T00:00',
            visualizationType: 15,
            title: 'ЧОД',
            factName: 'Факт',
            planName: 'План',
            receivedPointsName: null,
            factMain: 99,
            planMain: 10,
            measureMain: null,
            measureMain3Layer: null,
            maxValueMain: 11,
            factDetail: '6',
            planDetail: '16',
            planPointsValue: null,
            measureDetail: 'руб',
            measureDetail3Layer: null,
            receivedPointsValue: '0',
            isStarReceived: false,
            isTempOk: true,
            metricValue: null,
            measureName: null,
            planValue: null,
            execution: null,
            executionRR: null,
            planPointsName: null,
            isStarEnabled: true,
            redirectTo: null,
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: null,
        isValid: true,
    },
    {
        indicatorShortName: 'diagramShelves',
        metricId: 126,
        metricCode: null,
        dataSource: 'card',
        indicatorType: 'diagramShelvesTempo',
        indicatorDetail: {
            rdt: null,
            planMain: 100,
            factMain: 50,
            measureMain: '%',
            isStarReceived: false,
            visualizationType: 16,
            title: '2кв',
            factName: 'Факт',
            planName: 'План',
            factDetail: null,
            planDetail: null,
            measureDetail: null,
            measureDetail3Layer: 'Выполнение, %',
            planPointsValue: '30',
            receivedPointsValue: '20',
            measureMain3Layer: 'Аккредитивов',
            receivedPointsName: 'Баллы',
            metricValue: null,
            measureName: null,
            planValue: null,
            execution: null,
            executionRR: null,
            planPointsName: null,
            planMain1MonthQuarter: 40,
            planMain2MonthQuarter: 75,
            isTempOk: true,
            isStarEnabled: true,
            redirectTo: 'pageEfficientMeetings',
        },
        orderOn1Layer: null,
        groupCode: null,
        isIndicatorCalculated: true,
        orderInGroup: null,
        nestedWidgetId: null,
        isValid: true,
    }
];