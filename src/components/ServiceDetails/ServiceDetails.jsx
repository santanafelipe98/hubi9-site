import React from 'react'
import Divider from '../Divider'

import PropTypes from 'prop-types'

const ServiceDetails = props => (
    <div className="ServiceDetails">
        <section className="serviceDetailsHeader">
            <div className="backgroundImage">
            </div>
            <Divider />
            <h1 className="serviceDetailsHeading">{ props.title }</h1>
            <Divider />
        </section>
    </div>
)

ServiceDetails.propTypes = {
    title: PropTypes.string,
    subtitile: PropTypes.string,
    text: PropTypes.string
}

export default ServiceDetails