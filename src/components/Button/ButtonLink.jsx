import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Button.css'
import { Link } from 'react-router-dom'

const ButtonLink = props => {
    const className = useMemo(() => {
        let classes = `${props.className || ''} ButtonLink`

        switch (props.variant) {
            case 'primary':
                classes += ' buttonPrimary'
                break
            case 'secondary':
                classes += ' buttonSecondary'
                break
            default:
                classes += ' buttonDefault'
        }

        return classes
    }, [ props.variant, props.className ])

    return (
        <Link className={className} onClick={props.onClick}  to={props.to}>{ props.children }</Link>
    )
}

ButtonLink.defaultProps = {
    variant: 'default',
    to: '#'
}

ButtonLink.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([ 'default', 'primary', 'secondary' ]),
    to: PropTypes.string
}

export default ButtonLink