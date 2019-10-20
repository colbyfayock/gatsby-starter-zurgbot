import React from 'react';
import { FaRocket } from 'react-icons/fa';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Columns from 'components/Columns';
import Column from 'components/Column';

import img_gatsby_zurg from 'assets/images/gatsby-zurg.png';

const IndexPage = () => {
  // We don't include the title in Helmet here because we'll inherit the
  // default title from Layout
  return (
    <Layout pageName="home">
      <Container className="content">
        <Columns>
          <Column>
            <p className="gatsby-astronaut">
              <img src={img_gatsby_zurg} alt="Build with Gatsby!" />
            </p>
            <h1>
              <FaRocket /> Gatsby Zurg Starter
            </h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <h2>Still Getting Started?</h2>
            <p>Run the following in your terminal!</p>
            <pre>
              <code>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-zurg</code>
            </pre>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default IndexPage;
