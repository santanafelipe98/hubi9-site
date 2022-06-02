import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

const Divider = props => {
    const styles = useMemo(() => ({
        width: props.width || '33%',
        height: props.height || '8px',
        color: props.color || '#600ab3'
    }), [ props.color, props.width, props.height ])

    return (
        <div style={styles}  className="Divider"></div>
    )
}

Divider.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export default Divider