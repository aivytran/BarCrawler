import React from 'react';
import BarIndexItem from './bar_index_item';

const BarIndex = ({bars, changeHoverBar, deleteHoverBar}) => (
  <div className="bars-index">
    <div className="scroll-view">
      <ul>
        {bars.map((bar, idx) => (
          <li key={idx} className="bar-index-item"><BarIndexItem bar={bar} changeHoverBar={changeHoverBar} deleteHoverBar={deleteHoverBar}/> </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BarIndex
