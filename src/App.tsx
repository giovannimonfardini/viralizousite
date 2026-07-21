import { Navigate, Route, Routes } from 'react-router'
import WebServiceRedirect from './components/auth/WebServiceRedirect'
import Home from './pages/Home'
import { webServiceAppUrl, webServiceLoginUrl } from './lib/webService'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<WebServiceRedirect to={webServiceLoginUrl} />} />
      <Route path="/app" element={<WebServiceRedirect to={webServiceAppUrl} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
