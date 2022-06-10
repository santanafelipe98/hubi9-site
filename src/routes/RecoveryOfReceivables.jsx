import React, { useCallback, useMemo, useState } from 'react'
import '../styles/global.css'
import ServiceDetails from '../components/ServiceDetails'
import Section from '../components/Section'
import { ServiceInfo } from '../components/ServiceInfo'

import GoToTop from '../components/GoToTop'
import WhatCanBeDenied from '../components/WhatCanBeDenied'
import HowToDenyACostumer from '../components/HowToDenyACustomer/HowToDenyACostumer'

const IMAGE_URL = `${process.env.PUBLIC_URL}/images/recuperacao_de_recebiveis.png`

const RecoveryOfReceivables = props => {
    const renderText = () => (
        <>
            <p>A negativação de clientes aumenta as chances de recebimento, mas essa não é a única vantagem de se realizar esse processo.</p>
            <p>Isso porque o hábito de negativação traz, também, benefícios para outras empresas que fazem consultas nos órgãos de proteção para tomar a decisão de conceder crédito ou não para um cliente.</p>
            <p>E, quando um mau pagador tem o seu nome em uma lista de inadimplentes, as empresas podem se preservar de realizar negócios, evitando fraudes.</p>
        </>
    )

    return (
        <>
            <ServiceDetails
                backgroundImage={IMAGE_URL}
                title="Recuperação de Recebíveis"
                subtitile="Recuperação de Recebíveis"
                text={ renderText() } />
            <HowToDenyACostumer />
            <WhatCanBeDenied />
            <GoToTop />
        </>
    )
}

export default RecoveryOfReceivables