import React from 'react'
import PropTypes from 'prop-types'

import './ContactCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = props => (
    <div className="ContactCard">
        <FontAwesomeIcon icon={props.icon} size="3x" color="#000" />
        <h3 className="contactCardTitle">
            <a href={ props.linkTo || '#' } target="_blank">{ props.title }</a>
        </h3>
        <div className="contactCardText">{ props.text }</div>
    </div>
)

ContactCard.propTypes = {
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.any ]),
    title: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string
}

export default ContactCard