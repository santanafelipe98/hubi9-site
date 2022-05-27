import React from 'react'
import PropTypes from 'prop-types'

import './SocialMedia.css'

import SocialButton from './SocialButton'

const SocialMedia = props => {
    return (
        <div className="SocialMedia">
            { props.children }
        </div>
    )
}

export default SocialMedia