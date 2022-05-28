import React from 'react'

import Section from '../components/Section'
import Card from '../components/Card'

import { ServiceInfo } from '../components/ServiceInfo'

const OurServices = props => {
    return (
        <div className="OurServices">
            <Section title="Nossos serviços">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title="Análise de Crédito"
                            description="Entendemos problemas e apontamos caminhos"
                            imageUrl={ `${process.env.PUBLIC_URL }/images/analise_de_credito.jpg` }
                            buttonLinkUrl="#" />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Recuperação de Recebíveis"
                            description="Somos especialistas em desenvolvimento"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/recuperacao_de_recebiveis.jpg` }
                            buttonLinkUrl="#" />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Protesto de Títulos"
                            description="Somos especialistas em desenvolvimento"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/protesto_de_titulos.webp` }
                            buttonLinkUrl="#" />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Gestão Financeira"
                            imageUrl={ `${process.env.PUBLIC_URL}/images/gestao_financeira.png` }
                            description="Somos especialistas em desenvolvimento"
                            buttonLinkUrl="#" />
                    </div>
                </div>
            </Section>
            <ServiceInfo data={
                {
                    title: "Análise de Crédito",
                    subtitle: "Entendemos problemas e apontamos caminhos",
                    description: "Nossos especialistas possuem expertise, técnicas e ferramentas necessárias para entender a realidade do seu negócio, identificar oportunidades e necessidades de melhoria e apontar os melhores caminhos para resolver problemas.",
                    tags: [
                        {
                            icon: 'coffee',
                            text: 'Entendemos problemas e apontamos caminhos'
                        },
                        {
                            icon: 'coffee',
                            text: 'Entendemos problemas e apontamos caminhos'
                        },
                        {
                            icon: 'coffee',
                            text: 'Entendemos problemas e apontamos caminhos'
                        },
                        {
                            icon: 'coffee',
                            text: 'Entendemos problemas e apontamos caminhos'
                        }
                    ]
                }
            } />
        </div>
    )
}

export default OurServices