import React, { useMemo } from 'react'
import '../styles/OurServices.css'

import PropTypes from 'prop-types'

import Section from '../components/Section'
import Card from '../components/Card'
import GoToTop from '../components/GoToTop'

const OurServices = props => {
    const styles = useMemo(() => ({
        backgroundColor: '#212529',
        backgroundImage: `linear-gradient(180deg,#212529,rgba(33,37,41,.8) 33%),linear-gradient(180deg,transparent 33%,#212529 66%),url(${process.env.PUBLIC_URL}/images/servicos.jpg)`,
        backgroundPosition: '0 0,0 0,50% 50%',
        backgroundAttachment: 'scroll,scroll,fixed'
    }), [])

    return (
        <div style={styles} className={`OurServices ${props.asPage ? 'asPage' : ''}`}>
            <Section title="Nossos serviços">
                <div className="row">
                    <div className="col-md-12 col-lg-3">
                        <Card
                            title="Análise de Crédito"
                            description="Entendemos problemas e apontamos caminhos"
                            imageUrl={ `${process.env.PUBLIC_URL }/images/analise_de_credito.png` }
                            buttonLinkUrl="/servicos/analise-de-credito" />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Card
                            title="Recuperação de Recebíveis"
                            description="Somos especialistas em desenvolvimento"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/recuperacao_de_recebiveis.png` }
                            buttonLinkUrl="/servicos/recuperacao-de-recebiveis" />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Card
                            title="Protesto de Títulos"
                            description="Somos especialistas em desenvolvimento"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/protesto_de_titulos.png` }
                            buttonLinkUrl="/servicos/protesto-de-titulos" />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Card
                            title="Soluções em Pagamento"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/gestao_financeira.png` }
                            description="Somos especialistas em desenvolvimento"
                            buttonLinkUrl="/servicos/solucoes-em-pagamento" />
                    </div>
                </div>
            </Section>
            <GoToTop />
        </div>
    )
}

OurServices.propTypes = {
    asPage: PropTypes.bool
}

OurServices.defaultProps = {
    asPage: false
}

export default OurServices