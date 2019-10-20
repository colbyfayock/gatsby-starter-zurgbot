import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';

const NotFoundPage = () => {
  return (
    <Layout pageName="404">
      <Helmet>
        <title>404: Page Not Found</title>
      </Helmet>
      <h1>Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
