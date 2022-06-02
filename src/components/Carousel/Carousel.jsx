import React, { useState, useEffect } from 'react'

import './Carousel.css'

const Carousel = props => {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(curr => {
                if (curr >= React.Children.count(props.children) - 1)
                    return 0

                return ++curr
            })
        }, 3000)
        
        return () => clearInterval(timer)
    }, [setCurrentSlide, props.children])

    return (
        <div className="Carousel">
            {
                React.Children.map(props.children, (child, i) => {
                    const styles = {
                        transform: `translateX(${(i - currentSlide) * 100}%)`
                    }

                    return (
                        <div
                            key={ `slide${i}` }
                            style={ styles }
                            className="slide">
                            { child }
                        </div>
                    )
                })
            }
            <div className="dots">
                {
                    React.Children.map(props.children, (_, i) => <div className={ `dot ${ i == currentSlide ? ' active' : '' }` } onClick={() => setCurrentSlide(i)}></div>)
                }
            </div>
        </div>
    )
}

export default Carousel