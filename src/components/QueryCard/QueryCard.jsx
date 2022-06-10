import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'

import './QueryCard.css'

const QueryCard = props => (
    <div className="QueryCard">
        <div className="queryCardIcon"><img src={ props.iconURL } alt={ props.title } /></div>
        <h3 className="queryCardTitle">{ props.title }</h3>
        <Button
            className="buttonMoreInfo"
            variant="secondary"
            onClick={() => props.onActionClick ? props.onActionClick(props.items, { title: props.title, iconURL: props.iconURL }) : null}>
                Saiba mais
        </Button>
    </div>
)

QueryCard.propTypes = {
    iconURL: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    onActionClick: PropTypes.func,
}

export default QueryCard