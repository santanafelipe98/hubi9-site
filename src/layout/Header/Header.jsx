import React, { useMemo } from 'react'
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
                    <a href="/"><img src={ `${process.env.PUBLIC_URL}/images/logo.png` } alt="Logotipo Hubi9" /></a>
                </div>
                <nav className="navbarNav">
                    <a href="/servicos" className="navbarNavLink">Serviços</a>
                    <a href="#" className="navbarNavLink">Cases</a>
                    <a href="/contato" className="navbarNavLink">Contato</a>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    fixed: PropTypes.bool
}

export default Header