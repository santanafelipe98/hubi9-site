import React from 'react'
import './StepCard.css'

import PropTypes from 'prop-types'

const StepCard = props => (
    <div className="StepCard">
        <h2 className="stepCardTitle">{ props.title }</h2>
        <p className="stepCardText">{ props.text }</p>
    </div>
)

StepCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default StepCard