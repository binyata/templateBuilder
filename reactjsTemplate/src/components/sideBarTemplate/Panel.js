import React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from '../appLayout/Layout'
import styles from './css/main.css'
import logo from './img/companyLogo.png'

class Panel extends React.Component {
  render() {
    return (
      <div>
      <div className={styles.sideBarLogo}>
        <img src={logo} height="100%" width="100%" />
      </div>
        <button className={styles.panelButtonGeneral}>
          <div>[] Dashboard</div>
        </button>
        <div className={styles.panelGeneralInfo}>Filter</div>
        <button className={styles.panelButtonGeneral}>
          <div>Apply Filters</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Saved Filters +</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Retailers +</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Brand +</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Product Hierarchy +</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Line Count +</div>
        </button>
        <button className={styles.panelButtonGeneral}>
          <div>Metric +</div>
        </button>

        <div className={styles.panelGeneralInfo}>
          <button className={styles.panelPrimaryButton}>EXPORT</button>
        </div>
      </div>
    )
  }
}

// <div className={styles.panelGeneralInfo}>Filter</div>
// <button className={styles.panelButtonGeneral}>
//   <div>
//     Panel 1
//   </div>
// </button>
// <button className={styles.panelButtonGeneral}>
//   <div>
//     Panel 2
//   </div>
// </button>

export default Panel
