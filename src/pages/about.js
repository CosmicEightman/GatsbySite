import * as React from "react";
import Layout from "../components/layout";

const AboutPage = function () {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I am the proud creator of this site, which I built using
        Gatsby!
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
