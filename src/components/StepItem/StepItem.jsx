import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './StepItem.css'

const StepItem = props => {

    const renderLine = useCallback(() => {
        if (props.last)
            return null

        if (props.direction === 'lt') {
            return (
                <svg x="0px" y="0px" width="312px" height="130px">
                    <path class="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"></path>
                    <path class="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "></path>
                </svg>
            )
        }

        return (
            <svg x="0px" y="0px" width="312px" height="130px">
                <path class="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                <path class="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
            </svg>
        )
    }, [ props.direction, props.last ])

    return (
        <div className={`StepItem ${props.direction === 'lt' ? 'lt' : 'rt'}`}>
            <div className="stepWrapper">
                <div className="icon">
                    <FontAwesomeIcon icon={props.icon} size="3x" color="var(--primary-color)" />
                </div>
                <div className="textContent">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
            {
                renderLine()
            }
        </div>
    )
}

StepItem.propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.oneOf([ 'lt', 'rt' ]),
    last: PropTypes.bool
}

StepItem.defaultProps = {
    direction: 'lt'
}

export default StepItem