import React, { PropTypes } from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default class StatDisplay extends React.Component {

  render() {
    return (
      <div className={[styles.content]}>
        <div className={[styles.divider]}>
          <StyledText
            text={this.props.number}
            size="large"
            color="white"
          />
        </div>
        <br />
        <StyledText
          text={this.props.text}
          size="regular"
          color="black"
        />
      </div>
    )
  }
}

StatDisplay.propTypes = propTypes
