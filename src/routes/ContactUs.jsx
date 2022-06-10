import React, { useMemo } from 'react'

import '../styles/ContactUs.css'

import { Button } from '../components/Button'
import ContactCard from '../components/ContactCard'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import GoToTop from '../components/GoToTop'

const ContactUs = props => {
    const headerStyles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,rgba(29,29,36,.5),rgba(29,29,36,1)),url(${process.env.PUBLIC_URL}/images/contato.png)`,
        backgroundPosition: '50% 10%',
        backgroundSize: 'auto,cover',
        backgroundRepeat: 'repeat,no-repeat',
        backgroundAttachment: 'scroll,fixed'
    }), [])

    return (
        <div className="ContactUs">
            <section style={headerStyles} className="contactUsHeader">
                <div className="container">
                    <div className="row">
                        <div className="col call-to-action">
                            <h2 className="contactUsHeading">Você quer saber como nós podemos fazer sua empresa crescer?</h2>
                            <p className="contactUsText">Fale com um especialista agora por vídeo.</p>
                            <div className="buttonWrapper">
                                <Button variant="primary">Iniciar videoatendimento</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactWays">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <ContactCard
                                icon={faWhatsapp}
                                title="Converse pelo WhatsApp"
                                text="+55 (11) 9 6431-6542"
                                linkTo="https://api.whatsapp.com/send?phone=5511964316542&text=Ol%C3%A1!%20Como%20podemos%20te%20ajudar%3F" />
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <ContactCard
                                icon={["far", "envelope"]}
                                title="Envie um e-mail"
                                text="contato@hubi9.com.br"
                                linkTo='mailto:contato@hubi9.com.br' />
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <ContactCard
                                icon={["far", "message"]}
                                title="Envie uma mensagem"
                                text="Nós retornaremos assim que possível" />
                        </div>
                    </div>
                </div>
            </section>
            <GoToTop />
        </div>
    )
}

export default ContactUs