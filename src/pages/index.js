import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={styles.hero}>
          <h1 className="hero__title">
            <img src="img/flask_white.svg" id="logo"/>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
                <div className="col col--8 col--offset-2">
                  <div className="text--center">
                    <span style={{fontSize: "18pt"}}>
                       Catalyst is an open source incident response platform and ticket system that helps to automate alert handling and incident response processes
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
