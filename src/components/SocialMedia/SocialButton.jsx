import React from 'react'

import './SocialButton.css'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = props => {
    return (
        <a className="SocialButton" href={ props.url } target="_blank">
            <FontAwesomeIcon icon={["fab", props.icon]} size="lg"  />
        </a>
    )
}

SocialButton.defaultProps = {
    url: '#'
}

SocialButton.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.string
}

export default SocialButton