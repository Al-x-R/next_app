import React, { FC, useRef, useState, KeyboardEvent } from 'react';
import clsx from 'clsx';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Up from '../components/Up';

import { LayoutProps } from './Layout.props';
import { AppContextProvider, IAppContext } from '../context/app.context';

import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipMenuAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };


    return (
        <div className={styles.wrapper}>
            <a onFocus={() => setIsSkipLinkDisplayed(true)}
               tabIndex={0}
               className={clsx(styles.skipLink, {
                   [styles.displayed]: isSkipLinkDisplayed
               })}
               onKeyDown={skipMenuAction}
            >Сразу к содержанию</a>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.body} ref={bodyRef} tabIndex={0}>
                {children}
            </main>
            <Footer className={styles.footer} />
            <Up />
        </div>
      );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
          <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} >
            <Layout>
              <Component {...props} />
            </Layout>
          </AppContextProvider>
        );
    };
};
