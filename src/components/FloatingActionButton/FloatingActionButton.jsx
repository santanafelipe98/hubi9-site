import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './FloatingActionButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FloatingActionButton = props => {
    const styles = useMemo(() => ({
        left: props.left || 'auto',
        right: props.right || '20px',
        top: props.top || 'auto',
        bottom: props.bottom || '20px',
        backgroundColor: props.backgroundColor || 'var(--primary-color)',
        color: props.color || '#fff'
    }), [props.left, props.right, props.top, props.bottom])

    return (
        <button onClick={props.onClick} className="FloatingActionButton" style={styles}>
            <FontAwesomeIcon icon={props.icon} color={props.color} size="2x" />
        </button>
    )
}

FloatingActionButton.propTypes = {
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]),
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string
}

export default FloatingActionButton