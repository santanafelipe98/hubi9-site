import React from 'react'

import Jumbotron from '../layout/Jumbotron'
import OurServices from './OurServices'
import OurCustomers from './OurCustomers'
import HowItWorks from './HowItWorks'

const Home = props => (
    <div className="Home">
        <Jumbotron />
        <OurServices />
        <HowItWorks />
        <OurCustomers />
    </div>
)

export default Home