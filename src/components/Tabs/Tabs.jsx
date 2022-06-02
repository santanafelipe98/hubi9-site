import React from 'react'
import './Tabs.css'

import PropTypes from 'prop-types'

const Tabs = props => (
    <div className="Tabs">
        {
            React.Children.map(props.children, (child, i) => {
                if (child.type.name === 'TabList')
                    return React.cloneElement(child, { selectedIndex: props.selectedIndex, onSelect: props.onSelect })
                else if (child.type.name === 'TabPanel') {
                    if (props.selectedIndex + 1 === i) 
                        return child

                    return null
                }
                
                return null
            })
        }
    </div>
)

Tabs.defaultProps = {
    selectedIndex: 0
}

Tabs.propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
}

export default Tabs