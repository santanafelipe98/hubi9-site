import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import './Question.css'

const Question = props => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="Question">
            <div className="questionHeader" onClick={() => setIsOpen(val => !val)}>
                <div className="questionTitle">{props.title}</div>
                <button
                    className="buttonCollapse">
                        <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} color="#fff" />
                </button>
            </div>
            <div className={`answerWrapper ${!isOpen ? 'hidden' : '' }`}><span>{ props.answerText }</span></div>
        </div>
    )
}

Question.propTypes = {
    title: PropTypes.string,
    answerText: PropTypes.string
}

export default Question