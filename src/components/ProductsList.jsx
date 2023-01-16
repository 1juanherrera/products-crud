import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";



const ProductsList = ({products, deleteProduct, selectProduct}) => {

    return (
        <div className="products-list">
            {
                products?.map((product, index) => {
                    return (
                        <div key={`product-${index}`} className="product-list">
                            <ul>
                                <h3>Nombre: <span>{product.name}</span></h3>
                                <h3>Categoria: <span>{product.category}</span></h3>
                                <h3>Precio: <span>${product.price}</span></h3>
                                <div className="block-list" style={{backgroundColor: product.isAvailable ? '8D8CAB' : '#DFDFDF', 
                                                                    color: product.isAvailable ? '#fff' : '#91908E'}}>
                                    <h3>{product.isAvailable ? 'Disponible' : 'No disponible'}</h3>
                                </div>
                            </ul>
                            <div className="buttons">
                                <RiDeleteBinLine className="icon-list-1" />
                                 <button onClick={() => selectProduct(product)}>Editar</button>
                            </div>
                            <div className="buttons">
                                <BiEdit className="icon-list-2" />
                                <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsList