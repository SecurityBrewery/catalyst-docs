import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./index.module.css";
import featureStyles from '../components/HomepageFeatures.module.css';


function Img({Svg}) {
    return (
        <Svg className={featureStyles.featureSvg}/>
    );
}

export default function Hello() {
    return (
        <Layout
            title={`Support`}
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className={styles.hero}>
                <h1 className="hero__title">
                    Professional Support
                </h1>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="mailto:info@security-brewery.com"
                    >
                        Contact us
                    </Link>
                </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <p className="teaser">
                    </p>
                </div>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <div className={clsx('col col--4 col--offset-2')}>
                                <div className="text--center">
                                    <Img Svg={require('../../static/img/undraw_scrum_board.svg').default} />
                                </div>
                                <div className="text--center padding-horiz--md">
                                    <h3>Consulting and Support</h3>
                                    <p>You need help setting up Catalyst, integrating your processes or training for you analysts?</p>
                                </div>
                            </div>
                            <div className={clsx('col col--4')}>
                                <div className="text--center">
                                    <Img Svg={require('../../static/img/undraw_programming.svg').default} />
                                </div>
                                <div className="text--center padding-horiz--md">
                                    <h3>Feature Development</h3>
                                    <p>
                                        You are missing a feature or want a features request done to be rather sooner
                                        than later? You need a new automation, a new playbook or any other automation
                                        element?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons} style={{marginTop: "10pt"}}>
                            We offer professional support at
                            <a href="mailto: info@security-brewery.com" style={{margin: "5px"}}>info@security-brewery.com</a>
                            or you can use
                            <a href="https://github.com/SecurityBrewery/catalyst/discussions" style={{margin: "5px"}}>GitHub</a>
                            or
                            <a href="https://discord.gg/nrmpveWvZX" style={{margin: "5px"}}>Discord</a>
                            to discuss a topic.
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
