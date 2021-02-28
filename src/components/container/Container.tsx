import React from 'react';
import clsx from 'clsx';

import { useStyles } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({ children, className, id, disablePaddings = false }: ContainerProps) => {
  const styles = useStyles();

  return (
    <div id={id} className={clsx(className, styles.container, !disablePaddings && styles.padding)}>
      {children}
    </div>
  );
};
