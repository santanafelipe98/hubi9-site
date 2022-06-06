import React, { useMemo } from 'react'

import './Section.css'

import PropTypes from 'prop-types'

const Section = props => {
    const containerClass = useMemo(() => {
        if (props.fluid)
            return 'container-fluid'

        return 'container'
    }, [ props.fluid ])

    return (
        <section className={ `${ props.className || '' } Section` }>
            <h2 className={`sectionTitle ${props.theme || 'dark'}`}>{ props.title }</h2>
            <div className={ containerClass }>
                { props.children }
            </div>
        </section>
    )
}

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    fluid: PropTypes.bool,
    theme: PropTypes.oneOf([ 'light', 'dark' ])
}

Section.defaultProps = {
    theme: 'dark'
}

export default Section