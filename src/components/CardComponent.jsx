import { Description } from "@mui/icons-material"
import '../styles/CardComponent.css'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

export const CardComponent = ({ id, image, tittle, description, price, handlerAdd, handlerRemove }) => {

    const { shoppingList } = useContext(CartContext)

    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }

    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }

    const checkAdded = ()=>{
        const boolean = shoppingList.some(product => product.id == id)
        setAdded(boolean)
    }

    useEffect(() => {
      checkAdded()
    }, [])
    

    return (        
        <>
        <div className="card">
            <img src={image} alt={tittle} className="card-img" />
            <div className="card-content">
                <h3 className="card-tittle">{tittle}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                {
                    added ?
                        <button type="button"
                            className="remove-button"
                            onClick={removeProduct}>
                            Quitar del Carrito

                        </button>
                        :
                        <button type="button"
                            className="add-button"
                            onClick={addProduct}
                            > Agregar al Carrito                            
                        </button>
                }
            </div>
        </div>
        </>
    )
}