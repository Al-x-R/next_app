import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import { InputProps } from './Input.props';

import styles from './Input.module.css';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={clsx(className, styles.inputWrapper)}>
      <input className={clsx(styles.input, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});