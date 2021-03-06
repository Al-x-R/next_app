import { GetStaticProps } from 'next';
import React from 'react';
import axios from 'axios';

import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
import { withLayout } from '../layout';

function Search(): JSX.Element {

  return (
    <>
      Search
    </>
  );
}

export default withLayout(Search);

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};