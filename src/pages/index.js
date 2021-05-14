import * as React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/index.module.css';
import Feature from '../components/Feature';

const docUrl = (baseUrl, doc, lang) => {
  return `${baseUrl}docs/${lang ? `${lang}/` : ''}${doc}`;
};

const Button = ({ children, href }) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}>
        {children}
      </Link>
    </div>
  );
};

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const renderFeatures = () => {
    const features = [
      {
        title: 'Collaboration',
        description: 'Work together to complete tasks',
        imgUrl: 'img/collaboration.svg',
      },
      {
        title: 'Document',
        description:
          'Improve and maintain documentation',
        imgUrl: 'img/document.svg',
      },
      {
        title: 'Team',
        description:
          'Work as a team to get things done',
        imgUrl: 'img/team.svg',
      },
    ];

    return features.map((feature, idx) => (
      <Feature
        key={idx}
        title={feature.title}
        description={feature.description}
        imgUrl={feature.imgUrl}
      />
    ));
  };

  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main>
        <div className={classnames(styles.container__inner)}>
          <img
            src={`${siteConfig.baseUrl}img/2050.png`}
            className={styles.logo}
          />
          <h1 className={styles.title}>dev.2050.org</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div
            className={clsx(styles.heroButtons, 'name', 'margin-vert--md')}>
            <Button href={docUrl(siteConfig.baseUrl, '')}>Get Started</Button>
            <Button href='https://github.com/2050dev/document/projects/1'>Kanban</Button>
          </div>
          
          <div
            className={classnames('container', styles['features-container'])}
          >
            {renderFeatures()}
          </div>
        </div>
      </main>
    </Layout>
  );
}
