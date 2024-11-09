import Contact from "./Componenets/Contact/Contact"
import Footer from "./Componenets/Footer/Footer"
import Hero from "./Componenets/Hero/Hero"
import Navbar from "./Componenets/Navbar/Navbar"
import Products from "./Componenets/Products/Products"
import Services from "./Componenets/Services/Services"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

