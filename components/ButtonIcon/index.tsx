import React from 'react';
import clsx from 'clsx';

import { ButtonIconProps, icons } from './ButtonIcon.props';

import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];

    return (
        <button
            className={clsx(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
};

export default ButtonIcon;
