import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductosPage } from "./pages/ProductosPage"
import { CartPage } from "./pages/CartPage"

export const CarritoApp = () => {
  return (
    <>
    <NavBarComponent />
    <div className="container">
        <Routes>
            <Route path="/" element={<ProductosPage /> } ></Route>
            <Route path="/carrito" element={ <CartPage/> } ></Route>
            <Route path="/" element={ <Navigate to='/' /> }  ></Route>
        </Routes>
    </div>
    </>
  )
}
