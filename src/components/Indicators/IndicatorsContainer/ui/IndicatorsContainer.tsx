import type { ReactElement } from 'react';
import { BigIndicator } from '../../indicator/ui/Indicator';
import { indicatorsData } from '../data';
import './IndicatorsContainer.css';

export function IndicatorsContainer(): ReactElement {
    return (
        <div className="indicator-container">
            {indicatorsData.map((card) => (
                <BigIndicator key={card.metricId} card={card} />
            ))}
        </div>
    );
}