import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../appLayout/Layout';

const DataTable = () => {
  return (
    <Layout>
      <Header as="h2">Data Table Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DataTable;
