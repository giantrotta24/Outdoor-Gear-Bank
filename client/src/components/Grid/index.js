import React from 'react';
import './grid.css'

export const Container = ({ fluid, children }) => {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
};

export const Row = ({ fluid, children }) => {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
};

export const Col = ({ size, children }) => {
  return (
    <div
      className={size
        .split(' ')
        .map(size => 'col-' + size)
        .join(' ')}
    >
      {children}
    </div>
  );
};