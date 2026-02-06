import {  useRef } from 'react';
import './StarrySky.css';
import { StarrySkyChart } from '../../../components/StarrySky';
import useContainerDimensions from '../hooks/useContainerDimensions';

export function StarrySky() {
  //Получаем ширину и высоту блока кидая ref в hook, работает на resize
    const ref = useRef<HTMLDivElement>(null);
    const sizeDiv = useContainerDimensions(ref);
    const dimensions = {
        width: sizeDiv.width,
        height: sizeDiv.height - 20,
    };
  return (
    <div className="starry-sky">
      <h1 className="starry-sky__title">Звёздное небо</h1>
      <p className="starry-sky__intro">
        Интерактивная визуализация одной из моих работ на D3.js
      </p>
      <div ref={ref} className="starry-sky__canvas">
        <StarrySkyChart dimensions={dimensions} targetYear={2025} /> 
      </div>
    </div>
  );
}
