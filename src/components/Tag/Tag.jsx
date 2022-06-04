import React from 'react'

import './Tag.css'

const Tag = props => (
    <span className="Tag">
        { props.children }
    </span>
)

export default Tag