import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const root = ReactDOM.createRoot(document.getElementById('root'));
library.add(fas,fab)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
