import React from 'react';
import clsx from 'clsx';

import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';

const Sidebar = ({...props}: SidebarProps): JSX.Element => {

  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

export default Sidebar;
