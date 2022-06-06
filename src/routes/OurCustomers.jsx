import React, { useCallback } from 'react'

import '../styles/OurCustomers.css'

import CustomerTestimonial from '../components/CustomerTestimonial'
import GoToTop from '../components/GoToTop'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OurCustomers = props => {
    const renderIndicator = useCallback((clickHandler, isSelected) => (
        <div onClick={clickHandler} className={ `indicator ${isSelected ? 'active' : ''}`}></div>
    ), [])

    return (
        <div id="cases" className="OurCustomers">
            <FontAwesomeIcon className="quoteIcon" icon={faQuoteLeft} size="6x" color="#600ab3" />
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                renderIndicator={renderIndicator}
                dynamicHeight={true}>
                <CustomerTestimonial
                    text="Somos parceiros há anos, desde o início da ZigPay. Possuem uma equipe jovem e arrojada. O acompanhamento é constante, desde o desenvolvimento das ideias até a finalização do serviço/produto. Tudo com muito profissionalismo e agilidade."
                    author="Lorem Ipsum" />
                <CustomerTestimonial
                    text="Somos parceiros há anos, desde o início da ZigPay. Possuem uma equipe jovem e arrojada. O acompanhamento é constante, desde o desenvolvimento das ideias até a finalização do serviço/produto. Tudo com muito profissionalismo e agilidade."
                    author="Lorem Ipsum" />
                <CustomerTestimonial
                    text="Somos parceiros há anos, desde o início da ZigPay. Possuem uma equipe jovem e arrojada. O acompanhamento é constante, desde o desenvolvimento das ideias até a finalização do serviço/produto. Tudo com muito profissionalismo e agilidade."
                    author="Lorem Ipsum" />
            </Carousel>
            <GoToTop />
        </div>
    )
}

export default OurCustomers