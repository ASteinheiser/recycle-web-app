import React, { PropTypes } from 'react'

import TopNav from '../components/top-nav'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div className={[styles.fullWindow]}>

        <div className={[styles.content]}>

          <TopNav currentPage={window.location.pathname}>

            {this.props.children}

          </TopNav>

        </div>

      </div>
    )
  }
}

App.propTypes = propTypes
