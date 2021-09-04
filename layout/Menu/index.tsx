import React, { useContext } from 'react';
import { format } from 'date-fns';
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
              <div className={clsx(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevelMenu(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
        <Link href={`/${route}/${page.alias}`} key={page._id}>
          <a className={clsx(styles.thirdLevel, {
            [styles.thirdLevelActive]: false
          })}>
            {page.category}
          </a>
        </Link>

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
