import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../appLayout/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <Header as="h2">Login Page</Header>
      <div>
        <input type="field" />
        <input type="field" />
        <input type="button" value="Login" />
      </div>
    </Layout>
  );
};

export default LoginPage;
