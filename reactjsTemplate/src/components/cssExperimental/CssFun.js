import React from 'react'
import Layout from '../appLayout/Layout'

import TestImg from '../sideBarTemplate/img/companyLogo.png'
import styles from './css/main.css'

class CssFun extends React.Component {
  render() {
    return(
      <Layout>
        <h1>Css Experimental</h1>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src={TestImg} width="100%"/>
          </div>
          <div className={styles.column}>
            <img src={TestImg} width="100%"/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CssFun
