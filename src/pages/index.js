import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.hero}>
        <h1 className="hero__title">
          <img src="img/flask_white.svg" id="logo"/>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="https://try.catalyst-soar.com"
          >
            Try online
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
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
                      Catalyst is a SOAR (Security Orchestration, Automation and Response) system that helps you to automate your alert handling and incident response processes.
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
