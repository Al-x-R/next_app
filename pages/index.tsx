import React from 'react';
import Htag from '../components/Htag';
import Button from '../components/Button';
import Ptag from '../components/Ptag';
import Tag from '../components/Tag';

export default function Home(): JSX.Element {
  return (
    <div >
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
    </div>
  );
}
