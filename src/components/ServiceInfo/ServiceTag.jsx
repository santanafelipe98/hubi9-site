import React from 'react'

import PropTypes from 'prop-types'
import './ServiceTag.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceTag = props => (
    <div className="ServiceTag">
        <div className="serviceTagIcon">
            <FontAwesomeIcon
                icon={props.icon}
                size="2x"
                color="#e9ecef" />
        </div>
        <div className="text">{ props.text } </div>
    </div>
)

ServiceTag.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    text: PropTypes.string
}

export default ServiceTag