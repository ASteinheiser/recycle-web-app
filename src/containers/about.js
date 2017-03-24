import React from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class More extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />

        <StyledText
          text="About"
          size="large"
          color="blue"
        />

      </div>
    )
  }
}
