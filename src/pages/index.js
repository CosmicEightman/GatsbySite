import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = function () {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this following a Gatsby tutorial.</p>
      <StaticImage
        alt="Image of Canon 50mm L lens"
        src="https://i.ebayimg.com/images/g/~UUAAOSwtLVmrJLz/s-l1600.webp"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
