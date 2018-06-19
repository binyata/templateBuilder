import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './appLayout/Layout';

const Home = () => {
  return (
    <Layout>
      <p>Choose a template to demo.</p>
      <ul>
        <li><Link to="/dynamic">Core Tutorial Dynamic Page</Link></li>
        <li><Link to="/login-template">Login Page Example</Link></li>
        <li><Link to="/data-table-template">Data Table Example</Link></li>
        <li><Link to="/side-bar-template">Side Bar Navigation Example</Link></li>
        <li><Link to="/d3-template">D3js Example</Link></li>
        <li><Link to="/css-experimental">Css Experimental</Link></li>
      </ul>
    </Layout>
  );
};

export default Home;
