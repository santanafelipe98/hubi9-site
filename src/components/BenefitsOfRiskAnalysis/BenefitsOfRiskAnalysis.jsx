import { faCoins, faEye, faHandHoldingDollar, faLock, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import React, { useMemo } from 'react'
import BenefitItem from './BenefitItem'

import './BenefitsOfRiskAnalysis.css'

const BenefitsOfRiskAnalysis = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/vantagens_analise_de_risco.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '600px',
        backgroundPosition: '-20% 40%'
    }), [])

    return (
        <div style={styles} className="BenefitsOfRiskAnalysis">
            <div className="container">
            <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <h1 className="benefitsTitle">Vantagens da Análise de Crédito</h1>

                        <BenefitItem
                            icon={ faLock }
                            title="Mais segurança para a sua empresa"
                            text="A análise de risco de crédito ajuda seu negócio se manter seguro e saudável." />

                        <BenefitItem
                            icon={ faEye }
                            title="Visibilidade dos riscos"
                            text="Quando você investe em análise de crédito, consegue avaliar melhor os riscos de conceder esse benefício ao cliente." />

                        <BenefitItem
                            icon={ faCoins }
                            title="Prevenção da inadimplência"
                            text="A análise de crédito é, também, uma forma de se precaver e reduzir a inadimplência." />

                        <BenefitItem
                            icon={ faScaleBalanced }
                            title="Equilíbrio financeiro "
                            text="Ao reduzir a inadimplência, sua empresa consegue alcançar o tão desejado equilíbrio financeiro." />

                        <BenefitItem
                            icon={ faHandHoldingDollar }
                            title="Proteção das finanças do cliente"
                            text="Engana-se quem acredita que a análise de risco de crédito protege apenas quem vende." />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BenefitsOfRiskAnalysis