import React, { useCallback, useMemo } from 'react'
import './ServiceDetails.css'

import Divider from '../Divider'
import Tag from '../Tag'

import PropTypes from 'prop-types'
import { Button } from '../Button'

const ServiceDetails = props => {
    const headerStyles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,rgba(29,29,36,.85),rgba(29,29,36,.85)),url(${props.backgroundImage})`,
        backgroundPosition: '0 0,50% 50%',
        backgroundSize: 'auto,cover',
        backgroundRepeat: 'repeat,no-repeat',
        backgroundAttachment: 'scroll,fixed'
    }), [ props.backgroundImage ])

    const renderTag = useCallback((tag, i) => (
        <Tag key={`Tag_${i}`}>{ tag }</Tag>
    ))

    const tags = props.tags || []

    return (
        <div className="ServiceDetails">
            <section style={headerStyles} className="serviceDetailsHeader">
                <Divider />
                <h1 className="serviceDetailsHeading">{ props.title }</h1>
                <Divider />

                <div className="tags">
                    { tags.map(renderTag) }
                </div>
            </section>
            <section className="serviceDetailsDesc">
                <h1 className="serviceDetailsHeading">{ props.title }</h1>
                <Divider color="#fff" />
                <p>{  props.text }</p>
                { props.showActionButton && <Button className="btnAction" variant="secondary" onClick={props.onAction}>Solicitar orçamento</Button> }
            </section>
        </div>
    )
}


ServiceDetails.propTypes = {
    title: PropTypes.string,
    subtitile: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    backgroundImage: PropTypes.string,
    showActionButton: PropTypes.bool,
    onAction: PropTypes.func
}

ServiceDetails.defaultProps = {
    showActionButton: true
}

export default ServiceDetails