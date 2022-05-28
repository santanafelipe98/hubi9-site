import React from 'react'

import './Card.css'

import { ButtonLink } from '../Button'

import PropTypes from 'prop-types'

const Card = props => (
    <div className="Card">
        <div className="cardThumb">
            <img src={props.imageUrl} alt={ props.title } />
        </div>
        <div className="cardContent">
            <h3 className="cardTitle">{ props.title }</h3>
            <p className="cardDescription">{ props.description }</p>

            <ButtonLink className="buttonMoreInfo" to={props.buttonLinkUrl}>Saiba mais</ButtonLink>
        </div>
    </div>
)

Card.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    buttonLinkUrl: PropTypes.string,
}

export default Card