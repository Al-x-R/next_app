import { TopPageComponentProps } from './TopPageComponent.props';
import Htag from '../../components/Htag';
import Tag from '../../components/Tag';
import VacancyData from '../../components/VacancyData';

import styles from './TopPageComponent.module.css';


export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
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
        <div>sort</div>
      </div>
      <div>
        {products && products.map(p => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      <VacancyData {...page.hh} />
    </div>
  );
};
