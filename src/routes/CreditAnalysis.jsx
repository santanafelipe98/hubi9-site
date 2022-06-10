import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import '../styles/global.css'
import '../styles/CreditAnalysis.css'

import ServiceDetails from '../components/ServiceDetails'
import { ServiceInfo } from '../components/ServiceInfo'
import QueryCard from '../components/QueryCard'
import GoToTop from '../components/GoToTop'
import Section from '../components/Section'
import QueryButton from '../components/QueryButton'
import QueryListModal from '../components/QueryListModal'
import { BenefitsOfRiskAnalysis } from '../components/BenefitsOfRiskAnalysis'
import {FrequentlyAskedQueries} from '../components/FrequentlyAskedQueries'

const IMAGE_URL = `${process.env.PUBLIC_URL}/images/analise_de_credito.png`

const CreditAnalysis = props => {
    const  container = useRef(null)
    const  [ activeBanner, setActiveBanner ] = useState('')
    const  [ items, setItems ] = useState([])
    const  [ currentQuery, setCurrentQuery ] = useState({})
    const  [ showModal, setShowModal  ] = useState(false)

    useEffect(() => {
        if (activeBanner !== '') {
            document.getElementById('creditAnalysisBanner').scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [ activeBanner ])

    const bannerStyles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,#212529,transparent 10%),linear-gradient(180deg,transparent 50%,#212529),linear-gradient(180deg,rgba(7,8,9,.35),rgba(7,8,9,.35)),linear-gradient(180deg,rgba(48,48,64,.75),rgba(48,48,64,.75)),url(${process.env.PUBLIC_URL}/images/consultas.png)`,
        backgroundPosition: '50% 50%',
        backgroundSize: '100%'
        
    }), [])

    const handleAction = useCallback((items, query) => {
        setItems(items)
        setShowModal(true)
        setCurrentQuery(query)
    }, [])

    const renderBanner = useCallback(() => {
        if (activeBanner === 'pf') {
            return (
                <ServiceInfo
                        showActionButton={false}
                        data={{
                            title: "Consulta PF",
                        }}>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/light.png`}
                                    title="hub Light PF"
                                    items={[
                                        "Pendência Financeira",
                                        "Pendência Comercial",
                                        "Pendência bancária",
                                        "Cheques sem fundos",
                                        "Protestos Nacionais",
                                        "Alto volume de consultas"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/score.png`}
                                    title="hub Light + SCORE PF"
                                    items={[
                                        "Score com cadastro positivo",
                                        "Pendência financeira",
                                        "Pendencia comercial",
                                        "Pendência bancária",
                                        "Cheques sem fundos",
                                        "Protestos Nacionais",
                                        "Alto volume de consultas"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/plus.png`}
                                    title="hub Plus PF"
                                    items={[
                                        "Protestos Nacionais",
                                        "Alto volume de consultas em busca de crédito",
                                        "Indicadores",
                                        "Risco de crédito",
                                        "Probabilidade de pagamento"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/top.png`}
                                    title="hub Top PF"
                                    items={[
                                        "Risco de crédito",
                                        "Probabilidade de pagamento",
                                        "Pontualidade do Pagador",
                                        "Relacionamento com o Mercado"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                        </div>
                    </div>
                </ServiceInfo>
            )
        } else if (activeBanner === 'pj') {
            return (
                <ServiceInfo
                    data={{
                        title: "Consulta PJ"
                    }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/light.png`}
                                    title="hub Light PJ"
                                    items={[
                                        "Pendência financeira",
                                        "Pendência comercial",
                                        "Pendência bancária",
                                        "Cheques sem fundos",
                                        "Protestos Nacionais"
                                    ]}
                                    onActionClick={handleAction}  />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/score.png`}
                                    title="hub Light + SCORE PJ"
                                    items={[
                                        "Score com cadastro positivo",
                                        "Pendência financeira",
                                        "Pendência comercial",
                                        "Pendência bancária",
                                        "Cheques sem fundos",
                                        "Protestos nacionais",
                                        "Alto volume de consultas em busca"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/plus.png`}
                                    title="hub Plus PJ"
                                    items={[
                                        "Score com cadastro positivo",
                                        "Pendência financeira",
                                        "Pendência comercial",
                                        "Pendência bancária",
                                        "Cheques sem fundos",
                                        "Protestos nacionais"
                                    ]}
                                    onActionClick={handleAction} />
                            </div>
                            <div className="col-md-3">
                                <QueryCard
                                    iconURL={`${process.env.PUBLIC_URL}/images/top.png`}
                                    title="hub Top PJ"
                                    onActionClick={handleAction}
                                    items={[
                                        "Cheques sem fundos",
                                        "Cheques sem fundos",
                                        "Indicadores",
                                        "Risco de crédito",
                                        "Probabilidade de pagamento"
                                    ]} />
                            </div>
                        </div>
                    </div>
                </ServiceInfo>
            )
        }

        return null
    }, [ activeBanner ])

    return (
        <div ref={container} className="CreditAnalysis">
            <ServiceDetails
                backgroundImage={IMAGE_URL}
                title="Análise de Crédito"
                subtitile="Análise de Crédito"
                text="A consulta e análise de crédito é realizada para mensurar riscos e verificar a probabilidade de um cliente não quitar o valor devido ao seu credor visando assim menos prejuízos e mais segurança nas suas transações. Assim, antes de fechar qualquer negócio, a HubI9 te ajuda consultar por meio do CPF ou CNPJ mais informações sobre a conduta financeira do seu cliente."
                showActionButton={false} />
            <QueryListModal
                title={ currentQuery.title || '' }
                iconURL={ currentQuery.iconURL || '' }
                show={showModal}
                items={items}
                closeModal={() => setShowModal(false)}
                container={container.current} />
            <Section theme="light" className="ourQueries" title="Nossas consultas">
                <QueryButton onClick={ () => setActiveBanner('pf') } icon="pf">Consulta PF</QueryButton>
                <QueryButton onClick={ () => setActiveBanner('pj') } icon="pj">Consulta PJ</QueryButton>
            </Section>
            <div id="creditAnalysisBanner" style={bannerStyles} className="banner">
                { renderBanner() }
            </div>
            <BenefitsOfRiskAnalysis />
            <FrequentlyAskedQueries />
            <GoToTop />
        </div>
    )
}

export default CreditAnalysis