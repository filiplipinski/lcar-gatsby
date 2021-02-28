import React from 'react';
import clsx from 'clsx';

import { useStyles } from './SliderDot.styles';

type SliderDotProps = {
  isActive: boolean;
  onClick: VoidFunction;
};

export const SliderDot = ({ isActive, onClick }: SliderDotProps) => {
  const styles = useStyles();

  return (
    <div
      onClick={onClick}
      role="presentation"
      className={clsx(styles.dot, isActive && styles.activeDot)}
    >
      •
    </div>
  );
};
