import React from 'react'

import StyledText from '../components/styled-text'
import StatDisplay from '../components/stat-display'

import styles from './styles.css'

export default class Rewards extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />
        <br />

        <StyledText
          text="Monitor statistics about your personal recycling impact on the city, as well as your rewards points..."
          size="regular"
          color="blue"
        />

        <br />
        <br />
        <br />
        <br />
        <br />

        <StatDisplay
          number="1350"
          text="Reward Points"
        />

        <StatDisplay
          number="6 weeks"
          text="Recycling Streak"
        />

        <StatDisplay
          number="40 lbs"
          text="Total Recycled"
        />

      </div>
    )
  }
}
