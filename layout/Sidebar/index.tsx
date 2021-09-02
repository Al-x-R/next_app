import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';

import Menu from '../Menu';
import { AppContext } from '../../context/app.context';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';


const Sidebar = ({...props}: SidebarProps): JSX.Element => {
  const { menu, setMenu, firstCategory} = useContext(AppContext);

  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
