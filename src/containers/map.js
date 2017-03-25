import React from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Map extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />
        <br />

        <StyledText
          text="Watch as trucks make their routes and see exactly what time they pass by your location."
          size="regular"
          color="blue"
        />

        <br />
        <br />
        <br />
        <br />

        <div className={[styles.paddingLeft]}>
          <img src="http://i.imgur.com/aT5LL3a.gif" />
        </div>

      </div>
    )
  }
}
