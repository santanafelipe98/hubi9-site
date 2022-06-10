import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-responsive-modal/styles.css'
import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
library.add(fas,fab, far)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={ `${process.env.PUBLIC_URL}` }>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
