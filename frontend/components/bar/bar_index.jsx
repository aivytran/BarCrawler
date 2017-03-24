import React from 'react';
import { Link } from 'react-router';
import BarIndexItem from './bar_index_item';

const BarIndex = ({bars, route, changeHoverBar, deleteHoverBar, changeView}) => (
  <div className="bar-index-shell">
    <Link onClick={()=> changeView("close-bar-index")}>
      <div className="bar-label">
          <div className="bar-label-view"><p>Nearby Bar</p> </div>
      </div>
    </Link>
    <div className="scroll-view">
      <ul>
        {bars.map((bar, idx) => (
          <li key={idx} className="bar-index-item">
            <BarIndexItem bar={bar}
              changeHoverBar={changeHoverBar}
              deleteHoverBar={deleteHoverBar}
              route={route}/>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BarIndex
