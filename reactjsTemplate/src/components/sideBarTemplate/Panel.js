import React from 'react'
import { Header } from 'semantic-ui-react'

import Layout from '../appLayout/Layout'
import styles from './css/main.css'
import logo from './img/companyLogo.png'
import barGraphPic from './img/barGraph.jpg'

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applyFilterActive: "false"
    }
  }
  render() {
    return (
      <div>
      <div className={styles.sideBarLogo}>
        <img src={logo} height="100%" width="100%" />
      </div>
        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>
              <img src={barGraphPic} height="25px" width="25px" />
              &nbsp; Dashboard
            </div>
          </div>
        </button>
        <div className={styles.panelGeneralInfo}>&nbsp; &nbsp; Filter</div>

        <div className={styles.panelGeneralInfo}>
          <button type="button" className={styles.panelPrimaryButton} disabled>APPLY</button>
        </div>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Saved Filters</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Retailers</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Brand</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Hierarchy</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Line Count</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>

        <button className={styles.panelButtonGeneral}>
          <div className={styles.innerPanel}>
            <div className={styles.columnLeft}>Metric</div>
            <div className={styles.columnRight}>+</div>
          </div>
        </button>


        <div className={styles.panelGeneralInfo}>
          <button className={styles.panelPrimaryButton}>EXPORT</button>
        </div>
      </div>
    )
  }
}

export default Panel
