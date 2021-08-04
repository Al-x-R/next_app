import React from 'react';
import Htag from '../components/Htag';
import Button from '../components/Button';

export default function Home(): JSX.Element {
  return (
    <div >
      <Htag tag='h1' >title</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
    </div>
  );
}
