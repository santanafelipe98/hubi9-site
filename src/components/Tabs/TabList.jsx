import React from 'react'
import PropTypes from 'prop-types'
import './TabList.css'

const TabList = props => (
    <nav className="TabList">
        {
            React.Children.map(props.children, (child, i) =>
                React.cloneElement(child, {
                    active: props.selectedIndex === i,
                    onClick: () => props.onSelect ? props.onSelect(i) : false
                }))
        }
    </nav>
)

TabList.propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
}

export default TabList