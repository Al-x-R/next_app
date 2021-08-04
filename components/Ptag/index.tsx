import React from 'react';
import clsx from 'clsx';

import { PtagProps } from './Ptag.props';

import styles from './Ptag.module.css';

const Index = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {
  return (
    <p className={clsx(styles.p, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
    })}
       {...props}>
      {children}
    </p>
  );
};

export default Index;
