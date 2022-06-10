import React, { useMemo } from 'react'
import './SocialResponsibility.css'

import Content from '../../components/Content'
import { ButtonLink } from '../../components/Button'

const SocialResponsibility = props => {
    const styles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,rgba(29,29,36,.5),rgba(29,29,36,1)),url(${process.env.PUBLIC_URL}/images/responsabilidade_social.jpeg)`,
        backgroundPosition: '50% 10%',
        backgroundSize: 'auto,cover',
        backgroundRepeat: 'repeat,no-repeat',
        backgroundAttachment: 'scroll,fixed'
    }), [ props.backgroundImage ])

    return (
        <section style={styles} className="SocialResponsibility">
            <Content title="Responsabilidade Social">
                <div className="call-to-action">
                    <p className="socialResponsibilityText">
                        As diretrizes que orientam as nossas práticas pelos preceitos da responsabilidade social, tornando-os parte do nosso modelo de gestão, estão reunidas na Política de Responsabilidade Social da nossa empresa. A HUBI9 apoia esse projeto.
                    </p>
                    <ButtonLink variant="secondary">Faça a sua doação</ButtonLink>
                </div>
            </Content>
        </section>
    )
}

export default SocialResponsibility