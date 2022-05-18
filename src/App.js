import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import AddExpense from "./components/pages/add-expense";
import Home from "./components/pages/home";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  return (
     <BrowserRouter>
    <Header/>
  <Routes>
        
    <Route path="/" element={ <Home/>}></Route>
    <Route path="/add-expense" element={ <AddExpense/>}></Route>

    
  </Routes>
    <Footer/>
  
 </BrowserRouter>
  )
 
  
}

export default App;
