import React from 'react'

import './Content.css'
import PropTypes from 'prop-types'

const Content = props => (
    <div className="Content">
        <h3 className="contentTitle">
            { props.title }
        </h3>
        <div className="contentBody">
            {
                props.children
            }
        </div>
    </div>
)

Content.propTypes = {
    title: PropTypes.string
}

export default Content