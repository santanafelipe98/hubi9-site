import React from 'react'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import VideoServiceButton from '../../components/VideoServiceButton/VideoServiceButton'
import WhatsAppButton from '../../common/WhatsAppButton/WhatsAppButton'

const Main = props => (
    <>
        <Header fixed />
        { props.children }
        <Footer />
        <VideoServiceButton />
        <WhatsAppButton />
    </>
)

export default Main