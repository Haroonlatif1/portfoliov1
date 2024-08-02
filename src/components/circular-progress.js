import React from 'react';

const CircularProgressBar = ({
  percent,
  size,
  color,
  backgroundColor,
  animationDuration,
}) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - 10} // adjust the radius to create a gap
        fill={backgroundColor}
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - 10}
        stroke={color}
        strokeWidth={10}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x={radius}
        y={radius}
        fontSize={24}
        textAnchor="middle"
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;