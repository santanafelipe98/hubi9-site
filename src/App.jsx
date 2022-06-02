import './App.css'

import MainTemplate from './template/Main/Main'
import Home from './routes/Home'
import OurServices from './routes/OurServices'
import HowItWorks from './routes/HowItWorks'
import OurCustomers from './routes/OurCustomers'
import ContactUs from './routes/ContactUs'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="bootstrap-wrapper">
        <MainTemplate>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/servicos" element={ <OurServices /> } />
            <Route path="/como-funciona" element={ <HowItWorks /> } />
            <Route path="/nossos-clientes" element={ <OurCustomers /> } />
            <Route path="/contato" element={ <ContactUs /> } />
          </Routes>
        </MainTemplate>
      </div>
    </div>
  )
}

export default App;
