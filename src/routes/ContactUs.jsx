import React from 'react'

import '../styles/ContactUs.css'

import { Button } from '../components/Button'
import ContactCard from '../components/ContactCard'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'

const ContactUs = props => {
    return (
        <div className="ContactUs">
            <section className="contactUsHeader">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="contactUsThumb">
                                <img src={`${process.env.PUBLIC_URL}/images/contato.png`} alt="Foto nos contate" />
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="contactUsHeading">Quer saber como funciona a plataforma da hubi9? Fale com um consultor agora por vídeo</h2>
                            <p className="contactUsText">Veja na prática como a plataforma da hubi9 funciona.</p>
                            <Button variant="secondary">Iniciar videoatendimento</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactWays">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ContactCard
                                icon={faWhatsapp}
                                title="Converse pelo WhatsApp"
                                text="+55 (00) 0 0000-0000" />
                        </div>
                        <div className="col-md-4">
                            <ContactCard
                                icon={["far", "envelope"]}
                                title="Envie um e-mail"
                                text="contato@hubi9.com.br" />
                        </div>
                        <div className="col-md-4">
                            <ContactCard
                                icon={["far", "message"]}
                                title="Envie uma mensagem"
                                text="Nós retornaremos assim que possível" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs