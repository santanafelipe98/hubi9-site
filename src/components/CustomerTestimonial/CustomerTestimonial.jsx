import React from 'react'
import PropTypes from 'prop-types'

import './CustomerTestimonial.css'

const CustomerTestimonial = props => (
    <div className="CustomerTestimonial">
        <div className="testimonialText">
            { props.text }
        </div>
        <div className="testimonialAuthor">{ props.author }</div>
    </div>
)

CustomerTestimonial.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string,
}

export default CustomerTestimonial