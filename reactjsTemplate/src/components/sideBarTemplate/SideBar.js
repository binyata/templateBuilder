import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../appLayout/Layout';

const SideBar = () => {
  return (
    <Layout>
      <Header as="h2">Side Bar Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default SideBar;
