import React from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Map extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />

        <StyledText
          text="Map"
          size="large"
          color="blue"
        />

      </div>
    )
  }
}
