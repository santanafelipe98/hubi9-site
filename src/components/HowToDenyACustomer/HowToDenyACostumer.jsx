import React from 'react'
import './HowToDenyACostumer.css'

import StepItem from '../StepItem'
import Section from '../Section'
import { faCheckCircle, faFileText, faSquareArrowUpRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const IMAGE_URL = `${process.env.PUBLIC_URL}/images/computador_celular.png`

const HowToDenyACostumer = props => (
    <Section
        className="HowToDenyACostumer"
        title="Como negativar um cliente?"
        theme="light">
        <div className="row">
            <div className="col-md-6">
                <StepItem
                    icon={faUser}
                    title="1. Mantenha o cadastro completo do cliente na sua empresa" />
                <StepItem
                    direction='rt'
                    icon={faFileText}
                    title="2. Tenha um documento comprobatório da dívida" />
                <StepItem
                    icon={faClock}
                    title="3. Verifique o tempo de atraso da prestação." />

                <StepItem
                    direction="rt"
                    icon={faSquareArrowUpRight}
                    title="4. Acesse o sistema da hubi9 para fazer a negativação" />

                <StepItem
                    icon={faCheckCircle}
                    title="5. Retire o nome do cliente assim que ele quitar a dívida"
                    last />
            </div>
            <div className="col-md-6">
                <div className="image">
                    <img src={IMAGE_URL} alt="Computador e Celular" />
                </div>
            </div>
        </div>
    </Section>
)

export default HowToDenyACostumer