import React from 'react';
import clsx from 'clsx';

import { useStyles } from './Container.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => {
  const styles = useStyles();

  return <div className={clsx(className, styles.container)}>{children}</div>;
};
