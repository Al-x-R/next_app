import React, { useState } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

import { withLayout } from '../layout';
import Htag from '../components/Htag';
import Button from '../components/Button';
import Ptag from '../components/Ptag';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { Input } from '../components/Input';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

    const [rating, setRating] = useState(4);

    return (
      <>
          <Htag tag='h1' >title</Htag>
          <Button appearance='primary' arrow='right'>Button</Button>
          <Button appearance='ghost' arrow='down'>Button</Button>
          <Ptag size='l'>LARGE</Ptag>
          <Ptag size='m'>MEDIUM</Ptag>
          <Ptag size='s'>SMALL</Ptag>
          <Tag size='s'>Small</Tag>
          <Tag size='m'>Medium</Tag>
          <Tag size='m' color='ghost'>Medium ghost</Tag>
          <Tag size='m' color='red'>Medium red</Tag>
          <Tag size='m' color='green'>Medium green</Tag>
          <Tag size='m' color='primary'>Medium green</Tag>
          <Rating rating={rating} isEditable={true} setRating={setRating}/>
          <Input />
      </>
      );
}

export default withLayout(Home);

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

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
