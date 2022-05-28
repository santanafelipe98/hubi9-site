import React from 'react'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Main = props => (
    <>
        <Header fixed />
        { props.children }
        <Footer />
    </>
)

export default Main