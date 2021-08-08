import React, { FC } from 'react';
import clsx from 'clsx';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LayoutProps } from './Layout.props';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {

  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
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
