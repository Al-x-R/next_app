import React, { useContext, KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';

import styles from './Menu.module.css';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: { marginBottom: 0 }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevelMenu = () => {
    return(
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map(m => (
          <li key={m.route} aria-expanded={m.id == firstCategory}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={clsx(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevelMenu(m)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }

          return (
            <li key={m._id.secondCategory}>
              <button className={styles.secondLevel}
                      onClick={() => openSecondLevel(m._id.secondCategory)}
                      tabIndex={0}
                      onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                      aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.div className={styles.secondLevelBlock}
                          layout
                          variants={variants}
                          initial={m.isOpened ? 'visible' : 'hidden'}
                          animate={m.isOpened ? 'visible' : 'hidden'}>
                {buildThirdLevelMenu(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(page => (
          <motion.div key={page._id} variants={variantsChildren}>
            <Link href={`/${route}/${page.alias}`} >
              <a className={clsx(styles.thirdLevel, {[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath})}
                 tabIndex={isOpened ? 0 : -1}
                 aria-current={`/${route}/${page.alias}` == router.asPath ? 'page' : false}
              >
                {page.category}
              </a>
            </Link>
          </motion.div>
      ))
    );
  };

  return (
    <nav className={styles.menu}>
      {buildFirstLevelMenu()}
    </nav>
  );
};

export default Menu;
