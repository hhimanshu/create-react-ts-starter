import React from 'react';
import './styles.css';

export const Why = () => {
  return (
    <div className={'why'}>
      <h2>Why not use create-react-app?</h2>
      <p>
        create-react-app is a fantastic project. It helps to quickly hit the
        ground up and running, no questions about that. However, in my
        experience, when working with clients, there are more things that I need
        such as release support, deployment, CI setup - things that a software
        artifact needs anytime it delivers a business value. Hence, I built this
        project that truly helps to kickstart the project from an end-to-end
        perspective - from development to production. I use this project often
        and keeping it open for anyone having similar requirements. The tools I
        chose incur $0 when you bootstrap your idea (GitHub Actions, and
        Vercel).
      </p>
    </div>
  );
};
