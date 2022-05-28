import React from 'react'
import PropTypes from 'prop-types'
import ServiceTag from './ServiceTag'
import {Button} from '../Button'

import './ServiceInfo.css'

const ServiceInfo = props => {
    const renderTag = (tag, i) => (
        <ServiceTag key={ `tag${i}` } icon={tag.icon} text={tag.text} />
    )

    return (
        <div className="ServiceInfo">
            <div className="heading">Serviços</div>
            <h2 className="serviceInfoTitle">{ props.data.title }</h2>
            <h3 className="serviceInfoSubtitle">{ props.data.subtitle }</h3>
            <p className="serviceInfoDescription">{ props.data.description }</p>

            <div className="container serviceInfoTags">
                { props.data.tags.map(renderTag) }
            </div>

            <Button className="serviceInfoButton" variant="primary">Solicitar orçamento</Button>
        </div>
    )
}

ServiceInfo.defaultProps = {
    tags: []
}

ServiceInfo.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        subititle: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.array
    })
}

export default ServiceInfo