import React, { useCallback } from 'react'

import '../styles/OurCustomers.css'

import GoToTop from '../components/GoToTop'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const OurCustomers = props => {

    const properties = {
        duration: 3000,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        indicators: true,
        arrows: false,
        indicators: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        }]
    };

    return (
        <div id="cases" className="OurCustomers">
            <h2 className="ourCustomersTitle">Nossos valiosos clientes</h2>
            <Slide
                {...properties}
                className="slider">
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/arezzo.png`} alt="Logomarca da Arezzo" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/boticario.png`} alt="Logomarca da Boticário" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/consul.png`} alt="Logomarca da Consul" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/friboi.png`} alt="Logomarca da Friboi" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/apae.png`} alt="Logomarca da APAE" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/brasfer.png`} alt="Logomarca da BRASFER" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/eletrica_bahiana.png`} alt="Logomarca da Elétrica Bahiana" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/ifood.png`} alt="Logomarca da ifood" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/intelbras.png`} alt="Logomarca da Intelbras" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/kibon.png`} alt="Logomarca da Kibon" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/tramontina.png`} alt="Logomarca da Tramontina" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/salesiano.png`} alt="Logomarca da Salesiano" />
                    <img className="image" src={`${process.env.PUBLIC_URL}/images/maxi_atacado.png`} alt="Logomarca da Maxi Atacado" />
            </Slide>
            <GoToTop />
        </div>
    )
}

export default OurCustomers