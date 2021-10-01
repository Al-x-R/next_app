import React from 'react';
import clsx from 'clsx';

import { DividerProps } from './Divider.props';

import styles from './Divider.module.css';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
    return (
        <hr className={clsx(className, styles.hr)} {...props} />
    );
};

export default Divider;
