import React from 'react';
import clsx from 'clsx';

import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

const Footer = ({ ...props }: FooterProps): JSX.Element => {

  return (
    <div {...props}>
      Footer
    </div>
  );
};

export default Footer;
