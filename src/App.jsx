import './App.css'
import Header from './components/Header'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import ContactAndFooter from './pages/Contact'


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
      </main>
      <ContactAndFooter />
    </>
  )
}

export default App
