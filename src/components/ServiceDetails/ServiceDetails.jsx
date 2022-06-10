import React, { useMemo } from 'react'
import './ServiceDetails.css'

import Divider from '../Divider'
import PropTypes from 'prop-types'

const ServiceDetails = props => {
    const headerStyles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,rgba(29,29,36,.85),rgba(29,29,36,.85)),url(${props.backgroundImage})`,
        backgroundPosition: '0 0,50% 50%',
        backgroundSize: 'auto,cover',
        backgroundRepeat: 'repeat,no-repeat',
        backgroundAttachment: 'scroll,fixed'
    }), [ props.backgroundImage ])

    return (
        <div className="ServiceDetails">
            <section style={headerStyles} className="serviceDetailsHeader">
                <Divider color="var(--secondary-color)" />
                <h1 className="serviceDetailsHeading">{ props.title }</h1>
                <Divider color="var(--secondary-color)" />
            </section>
            <section className="serviceDetailsDesc">
                <h1 className="serviceDetailsHeading">{ props.title }</h1>
                <Divider color="var(--secondary-color)" />
                {
                    typeof props.text === "string"
                        ?  <p>{ props.text }</p>
                    : props.text
                
                }
            </section>
        </div>
    )
}


ServiceDetails.propTypes = {
    title: PropTypes.string,
    subtitile: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    backgroundImage: PropTypes.string,
}

export default ServiceDetails