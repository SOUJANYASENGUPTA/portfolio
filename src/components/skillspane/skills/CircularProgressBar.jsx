import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ name, percentage }) => {
  const calculateStrokeDashoffset = () => {
    return 440 - (440 * percentage) / 100;
  };

  const circleStyle = {
    strokeDashoffset: calculateStrokeDashoffset(),
    stroke: '#ee7dd6',
  };

  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70" ></circle>
              <circle cx="70" cy="70" r="70" style={circleStyle}></circle>
            </svg>
            <div className="num">
              <h2>
                {percentage}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 className="text">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
