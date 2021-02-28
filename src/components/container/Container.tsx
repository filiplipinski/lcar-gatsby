import React from 'react';
import clsx from 'clsx';

import { useStyles } from './Container.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  disablePaddings?: boolean;
};

export const Container: React.FC<Props> = ({ children, className, disablePaddings = false }) => {
  const styles = useStyles();

  return (
    <div className={clsx(className, styles.container, !disablePaddings && styles.padding)}>
      {children}
    </div>
  );
};
