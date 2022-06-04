import './App.css'

import MainTemplate from './template/Main/Main'
import Home from './routes/Home'
import OurServices from './routes/OurServices'
import CreditAnalysis from './routes/CreditAnalysis'
import HowItWorks from './routes/HowItWorks'
import OurCustomers from './routes/OurCustomers'
import ContactUs from './routes/ContactUs'
import RecoveryOfReceivables from './routes/RecoveryOfReceivables'
import TitleProtest from './routes/TitleProtest'
import PaymentoSolutions from './routes/PaymentSolutions'


import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="bootstrap-wrapper">
        <MainTemplate>
          <Routes>
            <Route path="/" element={ <Home /> }>
            </Route>
            <Route path="servicos" element={ <OurServices /> } />
            <Route path="servicos/analise-de-credito" element={ <CreditAnalysis /> } />
            <Route path="servicos/recuperacao-de-recebiveis" element={ <RecoveryOfReceivables /> } />
            <Route path="servicos/protesto-de-titulos" element={ <TitleProtest /> } />
            <Route path="servicos/solucoes-em-pagamento" element={ <PaymentoSolutions /> } />
            <Route path="como-funciona-a-adesao" element={ <HowItWorks /> } />
            <Route path="nossos-clientes" element={ <OurCustomers /> } />
            <Route path="contato" element={ <ContactUs /> } />
          </Routes>
        </MainTemplate>
      </div>
    </div>
  )
}

export default App;
