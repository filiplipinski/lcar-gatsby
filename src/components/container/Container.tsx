import React from 'react';
import { useStyles } from './Container.styles';

export const Container: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
};
