import React from 'react'
import PropTypes from 'prop-types'
import { ButtonLink } from '../Button'
import QueryCard from '../QueryCard'
import Divider from '../Divider'

import './ServiceInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const ServiceInfo = props => {
    const location = useLocation()

    return (
        <div className="ServiceInfo">
            <div className="serviceInfoHeader">
                <ButtonLink to={location.pathname}><FontAwesomeIcon icon={ faArrowLeft } color="#fff" size="2x"/></ButtonLink>
                <h2 className="serviceInfoTitle">{ props.data.title }</h2>
                <Divider height="2px" color="var(--secondary-color)" />
            </div>

            { props.children }
        </div>
    )
}

ServiceInfo.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        subititle: PropTypes.string,
        cards: PropTypes.arrayOf(PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string,
            onActionClick: PropTypes.func
        }))
    }),
    returnsToURL: PropTypes.string
}

export default ServiceInfo