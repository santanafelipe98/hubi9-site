import React, { useMemo } from 'react'

import Divider from '../Divider'
import './Section.css'

import PropTypes from 'prop-types'

const Section = props => {
    const containerClass = useMemo(() => {
        if (props.fluid)
            return 'container-fluid'

        return 'container'
    }, [ props.fluid ])

    return (
        <section style={props.style} className={ `${ props.className || '' } Section` }>
            <h2 className={`sectionTitle ${props.theme || 'dark'}`}>{ props.title }</h2>
            <Divider color={ props.dividerColor || 'var(--secondary-color)' } />
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
    theme: PropTypes.oneOf([ 'light', 'dark' ]),
    dividerColor: PropTypes.string
}

Section.defaultProps = {
    theme: 'dark'
}

export default Section