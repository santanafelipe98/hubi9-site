import React from 'react'
import './Footer.css'

import { SocialMedia, SocialButton } from '../../components/SocialMedia'

const Footer = props => (
    <footer>
        <div className="container">
            <img className="footerBrand" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Logotipo Hubi9" />
            <SocialMedia>
                <SocialButton icon="facebook-f" />
                <SocialButton icon="instagram" />
                <SocialButton icon="linkedin" />
                <SocialButton icon="twitter" />
                <SocialButton icon="youtube" />
                <SocialButton icon="spotify" />
            </SocialMedia>
        </div>
    </footer>
)

export default Footer