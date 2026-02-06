import './indicator.css';
import { useMemo } from 'react';
import cx from 'classnames';
import { getIndicator, getMaxSpeedometer } from '../lib';
import { WIDGET_INDICATOR_TYPES, isPercentBasedType } from '../constants';
import type { IIndicatorCard } from '../../IndicatorsContainer/data';

function getFactFromCard(card: IIndicatorCard): number {
    const { indicatorType, indicatorDetail } = card;
    const planMain = indicatorDetail.planMain ?? 1;

    if (isPercentBasedType(indicatorType)) {
        return (100 / planMain) * (indicatorDetail.factMain ?? 0);
    }
    return indicatorDetail.factMain ?? 0;
}

function getPlanFromCard(card: IIndicatorCard): number | undefined {
    const { indicatorType, indicatorDetail } = card;
    if (isPercentBasedType(indicatorType)) {
        return 100;
    }
    return indicatorDetail.planMain;
}

function getMaxFromCard(card: IIndicatorCard): number | undefined {
    const { indicatorType, indicatorDetail } = card;
    if (indicatorType !== 'speedometerType_2') {
        return indicatorDetail.maxValueMain ?? undefined;
    }
    const plan = indicatorDetail.planMain ?? 0;
    const fact = indicatorDetail.factMain ?? 0;
    return (getMaxSpeedometer(plan, fact) * 4) / 3;
}

export interface BigIndicatorProps {
    card: IIndicatorCard;
}

export function BigIndicator({ card }: BigIndicatorProps) {
    const indicatorType = card.indicatorType;
    const IndicatorComponent = useMemo(() => getIndicator(indicatorType), [indicatorType]);

    const fact = useMemo(() => getFactFromCard(card), [card]);
    const plan = useMemo(() => getPlanFromCard(card), [card]);
    const max = useMemo(() => getMaxFromCard(card), [card]);

    const detail = card.indicatorDetail;
    const planMain = detail.planMain ?? 0;
    const planMainSafe = planMain > 0 ? planMain : 1;

    const isLargeCard = (indicatorType as string) === WIDGET_INDICATOR_TYPES.ARC_FORWARD;

    return (
        <div
            className={cx('big-indicator__indicator-box', 'big-indicator__indicator-card', {
                'big-indicator__indicator-card--large': isLargeCard,
            })}
        >
            <div className="big-indicator__indicator-name">
                <span className="big-indicator__indicator-name--top">{card.indicatorShortName}</span>
            </div>
            <IndicatorComponent
                type={indicatorType}
                key={card.metricId}
                size="l"
                isExecution={detail.isStarReceived}
                isStarEnabled={detail.isStarEnabled}
                fact={fact}
                barFact={detail.factMain}
                plan={plan}
                barPlan={detail.planMain}
                max={max}
                isTempOk={detail.isTempOk}
                planMain1MonthQuarter={(100 / planMainSafe) * (detail.planMain1MonthQuarter ?? 0)}
                planMain2MonthQuarter={(100 / planMainSafe) * (detail.planMain2MonthQuarter ?? 0)}
            />
        </div>
    );
}
