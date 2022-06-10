import React from 'react'
import { BenefitItem } from '../BenefitsOfRiskAnalysis'


import './WhatCanBeDenied.css'

const IMAGE_URL = `${process.env.PUBLIC_URL}/images/o_que_pode_ser_negativado.png`

const WhatCanBeDenied = props => (
    <div className="WhatCanBeDenied">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="title">O que pode ser negativado?</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <BenefitItem text="Dívidas antigas, que ainda não completaram 05 anos" />
                            <BenefitItem text="Notas promissórias" />
                            <BenefitItem text="Títulos protestados em cartório ou não" />
                            <BenefitItem text="Duplicatas" />
                            <BenefitItem text="Boletos bancários" />
                            <BenefitItem text="Contratos" />
                        </div>
                        <div className="col-md-6">
                            <BenefitItem text="Mensalidades escolares" />
                            <BenefitItem text="Taxas condominiais" />
                            <BenefitItem text="Aluguéis" />
                            <BenefitItem text="Letras de câmbio" />
                            <BenefitItem text="Notas fiscais" />
                            <BenefitItem text="Cheques sem fundos e que foram devolvidos" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image">
                        <img src={IMAGE_URL} alt="O que pode ser negativado?" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WhatCanBeDenied