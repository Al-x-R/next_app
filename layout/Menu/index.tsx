import React, { useContext } from 'react';
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

  const buildFirstLevelMenu = () => {
    return(
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
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
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <motion.div className={styles.secondLevelBlock}
                          layout
                          variants={variants}
                          initial={m.isOpened ? 'visible' : 'hidden'}
                          animate={m.isOpened ? 'visible' : 'hidden'}>
                {buildThirdLevelMenu(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
          <motion.div key={page._id} variants={variantsChildren}>
            <Link href={`/${route}/${page.alias}`} >
              <a className={clsx(styles.thirdLevel, {
                [styles.thirdLevelActive]: false
              })}>
                {page.category}
              </a>
            </Link>
          </motion.div>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevelMenu()}
    </div>
  );
};

export default Menu;
