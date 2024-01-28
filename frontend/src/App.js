
import './App.css';
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Template from "./template/Template";

function App() {
  return (
    <>
    
      <Template>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/productlist" element={<ProductList />}/>
          <Route path="/products/:slug" element={<ProductDetail />}>
        </Route>
        </Routes>
      </Template>
      
      </>
  );
}

export default App;
