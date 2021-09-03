import React, { useContext } from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { AppContext } from '../../context/app.context';

import ServicesIcon from '../../helpers/icons/services.svg';
import CoursesIcon from '../../helpers/icons/courses.svg';
import ProductsIcon from '../../helpers/icons/products.svg';
import BooksIcon from '../../helpers/icons/books.svg';

import styles from './Menu.module.css';


const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

const Menu = () => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevelMenu = () => {
    return(
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={clsx(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id === firstCategory && buildSecondLevelMenu(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondLevelBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={clsx(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevelMenu(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
        <a href={`/${route}/${page.alias}`} className={clsx(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}>
          {page.category}
        </a>
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
