import React from 'react';
import { Section } from '../Section';
import { Feature } from '../Feature';
import './styles.css';
import { ExternalLink } from '../ExternalLink';

export const Features = () => {
  return (
    <Section title={'Features'} bgColor={'#F9F8F8'}>
      <div className={'features'}>
        <TypeScriptSupport />
        <TestingSupport />
        <StorybookSupport />
        <LintingSupport />
        <CISupport />
        <CDSupport />
        <RoutingSupport />
        <ReleaseSupport />
        <DependenciesUpdateSupport />
      </div>
    </Section>
  );
};

const TypeScriptSupport = () => {
  return (
    <Feature title={'TypeScript Support'}>
      <p>Write your project code, tests, all in TypeScript</p>
    </Feature>
  );
};

const TestingSupport = () => {
  return (
    <Feature title={'Testing Support'}>
      <p>
        Write your tests using the
        <ExternalLink title={'Jest'} url={'https://jestjs.io/'} /> and
        <ExternalLink
          title={'React Testing Library'}
          url={'https://testing-library.com/docs/react-testing-library/intro/'}
        />
      </p>
      <p>Code coverage available using Jest</p>
    </Feature>
  );
};

const StorybookSupport = () => {
  return (
    <Feature title={'Storybook Support'}>
      <p>
        Start with components-only and view them in
        <ExternalLink
          title={'Storybook'}
          url={'https://storybook.js.org/docs/react/get-started/introduction'}
        />
        locally
      </p>
    </Feature>
  );
};

const LintingSupport = () => {
  return (
    <Feature title={'Formatting & Linting support'}>
      <p>
        Format your code using
        <ExternalLink title={'Prettier'} url={'https://prettier.io/'} /> and
        analyze your code using
        <ExternalLink title={'ESLint'} url={'https://eslint.org/'} />
      </p>
    </Feature>
  );
};

const CISupport = () => {
  return (
    <Feature title={'CI Support'}>
      <p>
        Build and test your project using
        <ExternalLink
          title={'Github Actions'}
          url={'https://github.com/features/actions'}
        />
      </p>
    </Feature>
  );
};

const CDSupport = () => {
  return (
    <Feature title={'CD Support'}>
      <p>
        Ability to deploy your project on
        <ExternalLink
          title={'Vercel'}
          url={'https://vercel.com/docs#deploy-an-existing-project'}
        />
        once pull request is merged to main.
      </p>
      <p>
        Additionally, preview your project when you open pull requests using
        preview URLs
      </p>
    </Feature>
  );
};

const RoutingSupport = () => {
  return (
    <Feature title={'Bundled with React-Router'}>
      <p>Create your components and hook them up with routes</p>
      <div className={'routingLinks'}>
        <ExternalLink title={'Visit Page 1'} url={'/page1'} />
        <ExternalLink title={'Visit Page 2'} url={'/page2'} />
      </div>
    </Feature>
  );
};

const ReleaseSupport = () => {
  return (
    <Feature title={'Automated Release support'}>
      <p>
        Follows
        <ExternalLink
          title={'semantic-release'}
          url={'https://semantic-release.gitbook.io/semantic-release/'}
        />
        to automatically release your project once code is merged to main
      </p>
    </Feature>
  );
};

const DependenciesUpdateSupport = () => {
  return (
    <Feature title={'Up-to date dependencies'}>
      <p>
        Using{' '}
        <ExternalLink
          title={'renovate'}
          url={'https://docs.renovatebot.com/install-github-app/'}
        />
        , you do not have to remember or manually fiddle with dependency version
        changes
      </p>
    </Feature>
  );
};
