import React from 'react'
import { Header } from 'semantic-ui-react'

import Panel from './Panel'
import styles from './css/main.css'
import Layout from '../appLayout/Layout'

class SideBar extends React.Component {
  render() {
    return (
      <Layout>
        <Header as="h2">Side Bar Page</Header>
        <div className={styles.sideBarBack}>
          <Panel />
        </div>
      </Layout>
    );
  }
};

export default SideBar;
