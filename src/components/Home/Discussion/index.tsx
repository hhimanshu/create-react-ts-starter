import React from 'react';
import { Section } from '../Section';
import { Button } from '../Button';

export const Discussion = () => {
  const openDiscussion = () =>
    window.open(
      'https://github.com/hhimanshu/create-react-ts-starter/discussions'
    );

  return (
    <Section title={'Have ideas?'} bgColor={'#F9F8F8'}>
      <Button title={'Start a discussion'} onClick={openDiscussion} />
    </Section>
  );
};
