import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Try To Keep Your Mind Intact',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I want to get a handle on how pages are built and how to link to them.
      </>
    ),
  },
  {
    title: 'Work On What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        It looks like this NewTestFeatures/index.js file is where I can change the content of the home page.
      </>
    ),
  },
  {
    title: 'See What Is Possible Become Reality',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        But, this `Component` is just this lower area with these three feature regions. I have changed the area above before. I believe that is in the docusaurus.config.js file. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
