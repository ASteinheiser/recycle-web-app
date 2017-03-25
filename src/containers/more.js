import React from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class More extends React.Component {
  render() {
    return (
      <div className={[styles.innerWidth]}>
        <br />
        <br />

        <StyledText
          text="Additional resources..."
          size="large"
          color="blue"
        />

        <br />
        <br />
        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/garbage/request">
          <StyledText
            text="Submit a request"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/residential-recycling">
          <StyledText
            text="Residential recycling"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/zero-waste">
          <StyledText
            text="Zero waste"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/reimagine">
          <StyledText
            text="Reimagine Phoenix"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/garbage/bulktrash">
          <StyledText
            text="Bulk trash collection"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="https://www.phoenix.gov/publicworks/garbage/bulktrash/holiday-schedule">
          <StyledText
            text="Holiday collection"
            size="regular"
            color="blue"
          />
        </a>

        <br />
        <br />

        <a href="http://mapservices.phoenix.gov/gis/imap/iMap.html">
          <StyledText
            text="Find public services"
            size="regular"
            color="blue"
          />
        </a>

      </div>
    )
  }
}
