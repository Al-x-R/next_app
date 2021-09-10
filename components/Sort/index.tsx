import React from 'react';
import clsx from 'clsx';

import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';

import styles from './Sort.module.css';

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={clsx(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">Сортировка</div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={clsx({
          [styles.active]: sort === SortEnum.Rating
        })}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={clsx({
          [styles.active]: sort === SortEnum.Price
        })}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />По цене
      </button>
    </div>
  );
};

export default Sort;
