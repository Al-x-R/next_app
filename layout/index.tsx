import React, { FC } from 'react';
import clsx from 'clsx';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LayoutProps } from './Layout.props';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
