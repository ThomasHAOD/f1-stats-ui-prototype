import React from 'react';
import classes from './chartWrapper.module.css';

const chartWrapper = ({ children, title }) => {
  return (
    <div className={classes.chartWrapper}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default chartWrapper;
