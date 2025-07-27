import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QuoteLoader} from "./components/QuoteLoader";
import Logo from './assets/logo.jpg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuoteLoader
      animation='typewriter'
      interval={5000}
      category='funny'
      avatarUrl={Logo}
    />
  </StrictMode>,
)
