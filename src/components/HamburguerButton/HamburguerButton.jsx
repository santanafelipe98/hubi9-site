
import React from 'react'
import './HamburguerButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

const HamburguerButton = props => (
    <button onClick={props.onClick} className="HamburguerButton">
        <FontAwesomeIcon icon={props.opened ? faTimes : faBars} size="2x" color="#fff" />
    </button>
)

HamburguerButton.propTypes = {
    opened: PropTypes.bool
}

export default HamburguerButton