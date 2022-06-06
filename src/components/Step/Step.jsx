import React, { useCallback, useRef, useState, useEffect } from 'react'
import './Step.css'

import PropTypes from 'prop-types'
import StepCard from './StepCard'
import isElementInView from '../../utils/isElementInView'

const Step = props => {
    const [ show, setShow ] = useState(false)
    const ref  = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref && ref.current) {
                let show = isElementInView(ref.current)

                if (show)
                    setShow(show)
            }
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [ ref ])

    const renderDirection = useCallback(() => {
        if (props.direction === 'lt') {
            return (
                <div ref={ref} className="row lt">
                    <div className={`col-sm-12 col-md-7 stepImage ${show ? 'slideLtRt': 'hidden'}`}>
                        <img src={props.imageUrl} alt="Passo" />
                    </div>
                    <div className={`col-sm-12 col-md-5 ${show ? 'slideRtLt': 'hidden' }`}>
                        <StepCard title={props.title} text={props.text} />
                    </div>
                </div>
            )
        }

        return (
            <div ref={ref} className="row rt">
                <div className={ `col-md-5 ${show ? 'slideLtRt': 'hidden'}` }>
                    <StepCard title={props.title} text={props.text} />
                </div>
                <div className={ `col-md-7 stepImage col-md-5 ${show ? 'slideRtLt': 'hidden' }`}>
                    <img src={props.imageUrl} alt="Passo" />
                </div>
            </div>
        )
    }, [ props.direction, props.title, props.text, props.imageUrl, ref, show ])

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