import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';

import Menu from '../Menu';
import { AppContext } from '../../context/app.context';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';

import styles from './Sidebar.module.css';
import Search from '../../components/Search';


const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const { menu, setMenu, firstCategory} = useContext(AppContext);

  return (
    <div className={clsx(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
