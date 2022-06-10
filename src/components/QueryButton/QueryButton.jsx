import React from 'react'
import PropTypes from 'prop-types'

import './QueryButton.css'

const QueryButton = props => (
    <button onClick={props.onClick} className="QueryButton">
        <img src={`${process.env.PUBLIC_URL}/images/${props.icon}.png`} />
        <span className="text">{ props.children }</span>
    </button>
)

QueryButton.propTypes = {
    icon: PropTypes.oneOf([ 'pf', 'pj' ])
}


export default QueryButton