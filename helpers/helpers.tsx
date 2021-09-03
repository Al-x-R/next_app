import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CoursesIcon /> },
  { route: 'services', name: 'Сервисы', id: TopLevelCategory.Services, icon: <ServicesIcon />  },
  { route: 'books', name: 'Книги', id: TopLevelCategory.Books, icon: <BooksIcon />  },
  { route: 'products', name: 'Продукты', id: TopLevelCategory.Products, icon: <ProductsIcon /> }
];