import React, { useMemo } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = props => {
    
    const className = useMemo(() => {
        let classes = `${props.className} Button`

        switch (props.variant) {
            case 'primary':
                classes += ' buttonPrimary'
            default:
                classes += ' buttonDefault'
        }

        return classes
    }, [ props.variant, props.className ])

    (
        <button className={ className } { ...props }>
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
    variant: PropTypes.oneOf(['default', 'primary'])
}

export default Button