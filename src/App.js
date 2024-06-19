import Navbar from "./components/Navbar"
import Product from "./components/product"
import About from "./components/About"
import Footer from "./components/Footer"
import Search from  "./components/Search"
function App()
{
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Product></Product>
        <About></About>
        <Footer></Footer>
      </div>
    )
}
export default App