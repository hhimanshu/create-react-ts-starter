import React from 'react';
import { Section } from '../Section';

export const NotIncluded = () => {
  return (
    <Section title={'Why no redux or CSS Framework included?'}>
      <p>
        When it comes to client state management or using a styling solution,
        there are a lot of options available. Additionally, each team or
        individual have their favorites tools or needs for the problem at hand.
      </p>
      <p>
        This project does not assume or provides any opinion on those choices,
        so you are free to bring your own solution!
      </p>
    </Section>
  );
};
