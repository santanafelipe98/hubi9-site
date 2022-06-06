import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { ButtonLink } from '../../components/Button'
import { Link } from 'react-router-dom'
import './Header.css'

import PropTypes from 'prop-types'
import HamburguerButton from '../../components/HamburguerButton'

const Header = props => {
    const [ openMenu, setOpenMenu ] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const BREAKPOINT = 767

            let width = window.innerWidth

            if (width >= BREAKPOINT)
                setOpenMenu(false)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const className = useMemo(() => {
        let classes = 'Header'

        if (props.fixed)
            classes += ' navbarFixed'

        return classes
    }, [ props.fixed ])

    const toggleMenu = useCallback(() => {
        setOpenMenu(open => !open)
    }, [setOpenMenu])

    return (
        <header className={ className }>
            <div className="container">
                <div className="brand">
                    <Link to="/#"><img src={ `${process.env.PUBLIC_URL}/images/logotipo_colorido.png` } alt="Logotipo hubi9" /></Link>
                </div>
                <nav className={`navbarNav ${openMenu ? 'active' : ''}`}>
                    <ButtonLink onClick={ () => setOpenMenu(false) } className="navbarNavLink" variant="primary" to="/servicos#">Serviços</ButtonLink>
                    <ButtonLink onClick={ () => setOpenMenu(false) } className="navbarNavLink" variant="primary" to="#">Cases</ButtonLink>
                    <ButtonLink onClick={ () => setOpenMenu(false) } className="navbarNavLink" variant="primary" to="/contato#">Contato</ButtonLink>
                </nav>
                <HamburguerButton onClick={ toggleMenu } opened={ openMenu } />
            </div>
        </header>
    )
}

Header.propTypes = {
    fixed: PropTypes.bool
}

export default Header