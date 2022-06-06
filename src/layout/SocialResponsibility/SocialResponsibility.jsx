import React, { useMemo } from 'react'
import './SocialResponsibility.css'

import { Button } from '../../components/Button'

const SocialResponsibility = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo_responsabilidade_social.png)`,
        backgroundPosition: '50% 55%',
        backgroundAttachment: 'scroll, fixed',
        backgroundRepeat: 'no-repeat'
    }), [])

    return (
        <section style={styles} className="SocialResponsibility">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="socialResponsibilityThumb">
                            <img src={`${process.env.PUBLIC_URL}/images/responsabilidade_social.jpeg`} alt="Foto de responsab" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <h2 className="socialResponsibilityHeading">Responsabilidade Social</h2>
                        <p className="socialResponsibilityText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi asperiores a, voluptatibus iste, sapiente sunt eos vero perferendis quod veritatis dicta vitae voluptatum laborum maxime incidunt accusantium cupiditate laudantium.</p>
                        
                        <div className="buttonWrapper">
                            <Button variant="primary">Saiba mais</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialResponsibility