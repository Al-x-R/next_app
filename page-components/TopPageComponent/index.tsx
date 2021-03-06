import { useReducer, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

import { TopPageComponentProps } from './TopPageComponent.props';
import Htag from '../../components/Htag';
import Tag from '../../components/Tag';
import VacancyData from '../../components/VacancyData';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Advantages from '../../components/Advantages';
import Sort from '../../components/Sort';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import Product from '../../components/Product';

import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {dispatchSort({ type: 'reset', initialState: products });}, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products
                    && <Tag
                    color='grey'
                    size='m'
                    aria-label={products.length + 'элементов'}
                >
                    {products.length}
                </Tag>
                }
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div role='list'>
                {sortedProducts && sortedProducts.map(p => (
                    <Product key={p._id} product={p} role='listitem' layout={shouldReduceMotion ? false : true}/>
                ))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='m'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <VacancyData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущства</Htag>
                <Advantages advantages={page.advantages} />
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};

