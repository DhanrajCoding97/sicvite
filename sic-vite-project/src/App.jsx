import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Products from './components/Products'
import ContactForm from './components/ContactForm'
// import ComingSoon from './components/ComingSoon'
function App() {
  return (
    <>
      {/* <ComingSoon/> */}
      <Navbar/>
      <Hero 
        message="one stop solution for electrical and instrumentation products"
      />
      <About/>
      <Services/>
      <Products/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
