import React, { PropTypes } from 'react'

import TopNavTab from '../top-nav-tab'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div className={[styles.marginTop]}>

        <div className={[styles.topNavContainer]}>

          <TopNavTab
            text="About"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />

          <TopNavTab
            text="Live Map"
            linkTo="/map"
            active={this.props.currentPage === '/map'}
          />

          <TopNavTab
            text="Rewards"
            linkTo="/rewards"
            active={this.props.currentPage === '/rewards'}
          />

          <TopNavTab
            text="More"
            linkTo="/more"
            active={this.props.currentPage === '/more'}
          />

        </div>

        {this.props.children}

      </div>
    )
  }
}

TopNav.propTypes = propTypes
