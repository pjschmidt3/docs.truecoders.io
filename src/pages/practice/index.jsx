import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

const features = [
  {
    title: "HTML Elements",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Assess lecture documentation, exercises, and videos to help
        learn and cement your coding skills.
      </>
    ),
    linkPrompt: "Train",
    linkUrl: "practice/html-elements",
  },
  {
    title: "CSS Properties",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>Schedule 1-on-1 time with an instructor to receive the help you need.</>
    ),
    linkPrompt: "Train",
    linkUrl: "practice/html-elements", // duplicate to avoid error on current push to prod
  }
];

function Feature({ imageUrl, title, description, linkPrompt, linkUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <div className="card p-3 h-100">
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
            styles.getStarted
          )}
          to={useBaseUrl(linkUrl)}
        >
          {linkPrompt}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Practice`}
      description="A place to practice your coding knowledge and skills!"
    >
      <main className="homeSection">
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
