import React from 'react'

import '../styles/OurCustomers.css'

import CustomerTestimonial from '../components/CustomerTestimonial'
import Carousel from '../components/Carousel'

const OurCustomers = props => (
    <div className="OurCustomers">
        <Carousel>
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
    </div>
)

export default OurCustomers