import React from 'react'

import './Jumbotron.css'


import { ButtonLink } from '../../components/Button'

const Jumbotron = props => (
    <section className="Jumbotron">
        <div className="backgroundVideo">
            <video autoPlay muted loop style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/institucional.jpg)` }}>
                <source src={ `${process.env.PUBLIC_URL}/videos/jumbotron.mp4` }></source>
            </video>
        </div>
        <h1 className="heading">Inteligência em tecnologia<br />para seu negócio</h1>
        <p className="description">
            Existimos para transformar a realidade ao nosso redor por meio de tecnologia. Somos um hub de conhecimento e inovação, criamos nossas próprias empresas digitais e apoiamos empresas na tomada de decisão, desenvolvimento e resolução de desafios técnicos complexos.
        </p>
        <div className="more-info">
            <ButtonLink className="jumbotronButton" variant="primary">Serviços</ButtonLink>
            <ButtonLink className="jumbotronButton" variant="primary">Cases</ButtonLink>
        </div>
    </section>
)

export default Jumbotron
