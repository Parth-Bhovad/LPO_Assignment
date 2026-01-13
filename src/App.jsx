import LandingPage from './components/LandingPage.jsx'
import Navbar from './components/Navbar.jsx'
import PackageProvider from './context/PackageContext.jsx'

function App() {

  return (
    <>
      <PackageProvider>
        <Navbar />
        <LandingPage />
      </PackageProvider>
    </>
  )
}

export default App
