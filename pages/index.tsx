import React, { useState } from 'react';
import { withLayout } from '../layout';
import Htag from '../components/Htag';
import Button from '../components/Button';
import Ptag from '../components/Ptag';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

function Home(): JSX.Element {

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
      </>
      );
}

export default withLayout(Home);
