import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Tab.css'

const Tab = props => {
    const className = useMemo(() => {
        let classes = `${props.className || ''} Tab `

        if (props.active)
            classes += 'active'

        return classes
    }, [ props.active, props.className ])

    return (
        <a
            className={className}
            href="#0"
            onClick={props.onClick}>
            { props.children }
        </a>
    )
}

Tab.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

export default Tab