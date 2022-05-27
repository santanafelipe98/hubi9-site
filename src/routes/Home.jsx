import React from 'react'

import Header from '../layout/Header'
import Jumbotron from '../layout/Jumbotron'
import Footer from '../layout/Footer'

const Home = props => (
    <div className="Home">
        <Header fixed />
        <Jumbotron />
        <Footer />
    </div>
)

export default Home