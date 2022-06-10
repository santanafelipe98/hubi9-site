import React from 'react'
import Section from '../components/Section'
import { Step } from '../components/Step'
import GoToTop from '../components/GoToTop'

import '../styles/HowItWorks.css'

const HowItWorks = props => {
    return (
        <Section className="HowItWorks" title="Como contratar?" theme='light'>
            <Step
                title="Passo 01"
                text="Você pode criar vários departamentos de videoatendimento e distribuir a chamada para a equipe correta. Pode distribuir por geolocalização, por horário de atendimento ou por segmentação de produto."
                imageUrl={`${process.env.PUBLIC_URL}/images/passo_01.png`}></Step>
            <Step
                title="Passo 02"
                direction="rt"
                text="Saiba o que está acontecendo no atendimento em tempo real. Veja quantos clientes estão esperando, quantas chamadas estão em andamento e muito mais!"
                imageUrl={`${process.env.PUBLIC_URL}/images/passo_01.png`}></Step>
            <Step
                title="Passo 03"
                text="Veja toda a jornada do seu cliente, com todas as informações que foram trocadas durante o videoatendimento."
                imageUrl={`${process.env.PUBLIC_URL}/images/passo_01.png`}></Step>
            <Step
                title="Passo 04"
                direction="rt"
                text="Integre a NuVidio com informações de terceiros através de API´s e hooks."
                imageUrl={`${process.env.PUBLIC_URL}/images/passo_01.png`}></Step>
            <GoToTop />
        </Section>
    )
}


export default HowItWorks