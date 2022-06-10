import React from 'react'
import './Footer.css'

import { SocialMedia, SocialButton } from '../../components/SocialMedia'

const Footer = props => (
    <footer>
        <div className="container">
            <img className="footerBrand" src={`${process.env.PUBLIC_URL}/images/logotipo_colorido.png`} alt="Logotipo Hubi9" />
            <SocialMedia>
                <SocialButton icon="facebook-f" url="https://www.facebook.com/hubi9" />
                <SocialButton icon="instagram" url="https://www.instagram.com/hubi9.2022/" />
            </SocialMedia>
        </div>
    </footer>
)

export default Footer