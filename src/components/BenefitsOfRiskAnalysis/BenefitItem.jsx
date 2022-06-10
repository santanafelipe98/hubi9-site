import React from 'react'
import PropTypes from 'prop-types'

import './BenefitItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const BenefitItem = props => (
    <div className="BenefitItem">
        <div className="icon">
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="var(--primary-color)"/>
        </div>
        <p className="benefitText">
            { 
                props.title 
                    ?  (<><strong>{props.title}</strong> - {props.text}</>)
                    : props.text
            }
            
        </p>
    </div>
)

BenefitItem.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    text: PropTypes.string
}

export default BenefitItem