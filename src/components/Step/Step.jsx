import React, { useCallback } from 'react'
import './Step.css'

import PropTypes from 'prop-types'
import StepCard from './StepCard'

const Step = props => {
    const renderDirection = useCallback(() => {
        if (props.direction === 'lt') {
            return (
                <div className="row">
                    <div className="col-md-7 stepImage">
                        <img src={props.imageUrl} alt="Passo" />
                    </div>
                    <div className="col-md-5">
                        <StepCard title={props.title} text={props.text} />
                    </div>
                </div>
            )
        }

        return (
            <div className="row">
                <div className="col-md-5">
                    <StepCard title={props.title} text={props.text} />
                </div>
                <div className="col-md-7 stepImage">
                    <img src={props.imageUrl} alt="Passo" />
                </div>
            </div>
        )
    }, [ props.direction, props.title, props.text, props.imageUrl ])

    return (
        <div className="Step">
            { renderDirection() }
        </div>
    )
}

Step.propTypes = {
    direction: PropTypes.oneOf(['lt', 'rt']),
    title: PropTypes.string,
    text: PropTypes.string,
    imageUrl: PropTypes.string
}

Step.defaultProps = {
    direction: 'lt'
}

export default Step