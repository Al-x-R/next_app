import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

import styles from './Button.module.css';

const Button = ({ children, appearance, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
  return (
    <motion.button
        whileHover={{ scale: 1.05 }}
        className={clsx(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
        {...props}
    >
        {children}
        {arrow !== 'none' && <span
            className={clsx(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right'})}
        >
            <ArrowIcon />
        </span>
        }
    </motion.button>
  );
};

export default Button;
