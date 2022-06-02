import React, { useMemo } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = props => {
    
    const className = useMemo(() => {
        let classes = `${props.className || ''} Button`

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
        <button { ...props } className={ className }>
            {
                props.children
            }
        </button>
    )
}

Button.defaultProps = {
    variant: 'default'
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
}

export default Button