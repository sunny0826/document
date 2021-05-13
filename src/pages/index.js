import * as React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/index.module.css';
import Feature from '../components/Feature';

const docUrl = (baseUrl, doc, lang) => {
  return `${baseUrl}docs/${lang ? `${lang}/` : ''}${doc}`;
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
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <a
            href={docUrl(siteConfig.baseUrl, '')}
            target="_self"
            className={styles.button}
          >
            Get Started
          </a>

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
