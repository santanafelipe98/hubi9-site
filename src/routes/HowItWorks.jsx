import React, { useState, useCallback } from 'react'
import Section from '../components/Section'
import {
    Tabs,
    Tab,
    TabList,
    TabPanel
} from '../components/Tabs'

import '../styles/HowItWorks.css'

const HowItWorks = props => {
    const [ activeTabIndex, setActiveTabIndex ] = useState(0)

    const handleSelect = useCallback((index) => {
        setActiveTabIndex(index)
    }, [ setActiveTabIndex ])

    return (
        <Section className="HowItWorks" title="Como funciona?">
            <Tabs onSelect={handleSelect} selectedIndex={activeTabIndex}>
                <TabList>
                    <Tab>Análise de Crédito</Tab>
                    <Tab>Recuperação de Recebíveis</Tab>
                    <Tab>Protesto de Títulos</Tab>
                    <Tab>Soluções em Pagamento</Tab>
                </TabList>
                <TabPanel>
                    Como funciona a Análise de Crédito?
                </TabPanel>
                <TabPanel>
                    Como funciona a Recuperação de Recebíveis?
                </TabPanel>
                <TabPanel>
                    Como funciona o Protesto de Títulos?
                </TabPanel>
                <TabPanel>
                    Como funciona as Soluções em Pagamento?
                </TabPanel>
            </Tabs>
        </Section>
    )
}


export default HowItWorks