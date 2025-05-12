import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/mycomponents/Footer'
import LoaderComponent from './components/mycomponents/LoaderComponent'

createRoot(document.getElementById('root')).render(
  <LoaderComponent children={<App/>} />
)
