import './App.css'

import MainTemplate from './template/Main/Main';

import Home from './routes/Home'
import OurServices from './routes/OurSevices';

function App() {
  return (
    <div className="App">
      <div className="bootstrap-wrapper">
        <MainTemplate>
          <Home />
          <OurServices />
        </MainTemplate>
      </div>
    </div>
  )
}

export default App;
