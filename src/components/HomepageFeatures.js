import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Automate',
        Svg: require('../../static/img/undraw_walking_outside.svg').default,
        description: (
            <>
                Catalyst helps you to automate your alerts and incidents. Focus on the important tasks or relax a little.
            </>
        ),
    },
    {
        title: 'Easy to Setup',
        Svg: require('../../static/img/undraw_to_the_stars.svg').default,
        description: (
            <>
                Catalyst can be set up in a couple of minutes and contains all you need to start your alert handling and
                incident response.
            </>
        ),
    },
    {
        title: 'Flexible',
        Svg: require('../../static/img/undraw_workflow.svg').default,
        description: (
            <>
                Catalyst adapts to your processes and workflows. Ticket types, conditional
                custom fields, statuses and playbooks help to fit to your needs.
            </>
        ),
    },

    //{
    //  title: 'Reliable',
    //  Svg: require('../../static/img/undraw_server_status.svg').default,
    //  description: (
    //    <>
    //      Handling incidents requires
    //
    //      Fixing issues has a higher priority as new features.
    //
    //      Catalyst handles hundreds of thousands of alerts and incidents
    //    </>
    //  ),
    //},
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
