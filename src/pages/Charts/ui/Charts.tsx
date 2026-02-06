import './Charts.css';
import { IndicatorsContainer } from '../../../components/Indicators/IndicatorsContainer';


export function Charts() {
  return (
    <div className="charts">
      <h1 className="charts__title">Графики и визуализации</h1>
      <p className="charts__intro">
        Визуализация графиков с помощью React и D3.js
      </p>
       <IndicatorsContainer />
    </div>
  );
}
