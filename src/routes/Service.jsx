import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ServiceDetails from '../components/ServiceDetails'

const Service = props => {
    const [data] = useState({
        'analise-de-credito': {
            title: 'Análise de Credito'
        },
        'recuperacao-de-recebiveis': {
            title: 'Recuperação de Recebíveis'
        },
        'protesto-de-titulos': {
            title: 'Protesto de Títulos'
        },
        'solucoes-em-pagamento': {
            title: 'Soluções em Pagamento'
        }
    })

    const { serviceId } = useParams()

    return (
        <div className="Services">
            <ServiceDetails
                title={data[serviceId || 'analise-de-credito']['title']}
                subtitile="ZigPay: Plataforma de pagamentos sem contato"
                text="Desenvolvemos uma plataforma que inclui controle de consumo e vendas, fluxo de caixa e estoque. A solução permite ao estabelecimento acompanhar e modificar informações em tempo real, além de business intelligence para aumentar a receita e as vendas. Já o app Zig foi criado para inovar a experiência de consumo em eventos e casas noturnas. Com ele, o usuário faz o pagamento automático do seu consumo ao cadastrar seu cartão de crédito no app, eliminando filas."
                backgroundImage={`${process.env.PUBLIC_URL}/images/analise_de_credito.png`}
                tags={[ 'Imersão', 'Plano de Negócios', 'App', 'Dashboard', 'Landing Page', 'Cashless', 'Controle de consumo', 'Módulo fiscal', 'fluxo de caixa', 'controle de estoque', 'integração com rappi pay' ]} />
        </div>
    )
}

export default Service