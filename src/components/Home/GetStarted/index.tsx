import React from 'react';
import { Section } from '../Section';
import { Button } from '../Button';

export const GetStarted = () => {
  const openReadMe = () =>
    window.open('https://github.com/hhimanshu/create-react-ts-starter#readme');

  return (
    <Section title={'Ready to get started?'}>
      <Button title={'Follow README.md'} onClick={openReadMe} />
    </Section>
  );
};
