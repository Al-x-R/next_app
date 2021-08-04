import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button.props';

import styles from './Button.module.css';

const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
