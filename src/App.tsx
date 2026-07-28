import WebServiceRedirect from './components/auth/WebServiceRedirect'
import Home from './pages/Home'
import { webServiceAppUrl, webServiceLoginUrl, withAttribution } from './lib/webService'

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/login') {
    return <WebServiceRedirect to={withAttribution(webServiceLoginUrl)} />
  }

  if (pathname === '/app') {
    return <WebServiceRedirect to={withAttribution(webServiceAppUrl)} />
  }

  return <Home />
}
