import React, { useMemo } from 'react'
import { ButtonLink } from '../../components/Button'
import { Link } from 'react-router-dom'
import './Header.css'

import PropTypes from 'prop-types'

const Header = props => {
    const className = useMemo(() => {
        let classes = 'Header'

        if (props.fixed)
            classes += ' navbarFixed'

        return classes
    }, [ props.fixed ])
    
    return (
        <header className={ className }>
            <div className="container">
                <div className="brand">
                    <Link to="/"><img src={ `${process.env.PUBLIC_URL}/images/logotipo_colorido.png` } alt="Logotipo Hubi9" /></Link>
                </div>
                <nav className="navbarNav">
                    <ButtonLink className="navbarNavLink" variant="primary" to="/servicos">Serviços</ButtonLink>
                    <ButtonLink className="navbarNavLink" variant="primary" to="#">Cases</ButtonLink>
                    <ButtonLink className="navbarNavLink" variant="primary" to="/contato">Contato</ButtonLink>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    fixed: PropTypes.bool
}

export default Header