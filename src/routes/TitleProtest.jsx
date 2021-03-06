import React, { useCallback, useMemo, useState } from 'react'
import '../styles/global.css'
import ServiceDetails from '../components/ServiceDetails'
import { ServiceInfo } from '../components/ServiceInfo'

import GoToTop from '../components/GoToTop'

const IMAGE_URL = `${process.env.PUBLIC_URL}/images/protesto_de_titulos.png`

const TitleProtest = props => {
    const  [ showBanner, setShowBanner ] = useState(false)
    const bannerStyles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,#212529,transparent 10%),linear-gradient(180deg,transparent 50%,#212529),linear-gradient(180deg,rgba(7,8,9,.35),rgba(7,8,9,.35)),linear-gradient(180deg,rgba(48,48,64,.75),rgba(48,48,64,.75)),url(${IMAGE_URL})`
    }), [])

    const setBannerVisible = useCallback(() => {
        setShowBanner(true)

        const timer = setTimeout(() => {
            document.getElementById('titleProtestBanner').scrollIntoView({ behavior: 'smooth', block: 'end' })
            clearTimeout(timer)
        }, 300)
        
    }, [setShowBanner])

    return (
        <>
        <ServiceDetails
            backgroundImage={IMAGE_URL}
            title="Protesto de Títulos"
            subtitile="Protesto de Títulos"
            text="Desenvolvemos uma plataforma que inclui controle de consumo e vendas, fluxo de caixa e estoque. A solução permite ao estabelecimento acompanhar e modificar informações em tempo real, além de business intelligence para aumentar a receita e as vendas. Já o app Zig foi criado para inovar a experiência de consumo em eventos e casas noturnas. Com ele, o usuário faz o pagamento automático do seu consumo ao cadastrar seu cartão de crédito no app, eliminando filas."
            showActionButton
            tags={[ 'Imersão', 'Plano de Negócios', 'App', 'Dashboard', 'Landing Page', 'Cashless', 'Controle de consumo', 'Módulo fiscal', 'fluxo de caixa', 'controle de estoque', 'integração com rappi pay' ]}
            onAction={setBannerVisible} />
                <div id="titleProtestBanner" style={bannerStyles} className="banner">
                {
                    showBanner
                        && (
                            
                                <ServiceInfo
                                    data={{
                                        title: "Protesto de Títulos",
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
                                    }}
                                />
                            
                        )
                }
            </div>
            <GoToTop />
        </>
    )
}

export default TitleProtest