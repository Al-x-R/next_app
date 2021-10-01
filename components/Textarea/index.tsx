import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import { TextareaProps } from './Textarea.props';

import styles from './Textarea.module.css';

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={clsx(styles.textareaWrapper, className)}>
        <textarea className={clsx(styles.textarea, {
          [styles.error]: error
        })} ref={ref} {...props} />
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});
