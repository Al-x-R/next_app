import React from 'react';
import clsx from 'clsx';

import { TagProps } from './Tag.props';

import styles from './Tag.module.css';

const Tag = ({ size = 's', children, className, href, color = 'ghost', ...props }: TagProps): JSX.Element => {
  return (
    <div className={clsx(styles.tag, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.red]: color === 'red',
      [styles.grey]: color === 'grey',
      [styles.green]: color === 'green',
      [styles.ghost]: color === 'ghost',
      [styles.primary]: color === 'primary',
    })}
       {...props}>
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  );
};

export default Tag;
