import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../appLayout/Layout';

const D3Template = () => {
  return (
    <Layout>
      <Header as="h2">D3js Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default D3Template;
