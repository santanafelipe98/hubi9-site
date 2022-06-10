import React from 'react'
import Section from '../Section'
import Question from './Question'

import './FrequentlyAskedQueries.css'

const FrequentlyAskedQueries = props => {
    return (
        <Section className="FrequentlyAskedQueries" title="Perguntas Frequentes" theme="light">
            <p className="sectionDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit totam, temporibus ad qui <br /> enim sed illum praesent.</p>
            <div className="row">
                <div className="col-md-6 questionIcon">
                    <img src={`${process.env.PUBLIC_URL}/images/faq.png`} alt="FAQ" />
                </div>
                <div className="col-md-6">

                    <Question
                        title="Lorem ispum"
                        answerText="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                    <Question
                        title="Lorem ispum"
                        answerText="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                    <Question
                        title="Lorem ispum"
                        answerText="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                </div>
            </div>
        </Section>
    )
}

export default FrequentlyAskedQueries