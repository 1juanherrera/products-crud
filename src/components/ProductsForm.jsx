import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineShop } from "react-icons/ai";
import { BiCategoryAlt, BiPurchaseTag } from "react-icons/bi";

const ProductsForm = ({createProduct, productSelectedData, updateProduct}) => {

    const { register, handleSubmit, reset } = useForm()


    const getFormProducts = (data) => {
        if(productSelectedData){
            updateProduct(data)
        }else {
            createProduct(data)

            resetForm()
        }
    }

    useEffect(() => {
        if(productSelectedData !== null){
            reset(productSelectedData)
        }else {
            resetForm()
        }
    }, [productSelectedData])

    const resetForm = () => {
        reset (
            {
                name: '',
                category: '',
                price: '',
                isAvailable: false
            }   
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(getFormProducts)}>
                <div className="input-product">
                    <label htmlFor="product-name">Nombre </label>
                    <AiOutlineShop className="icon"/>
                    <input
                    id="product-name"
                    type="text"
                    {...register('name', {
                        required: true
                    })}
                    />
                </div>
                <div className="input-product">
                    <label htmlFor="product-category">Categoria </label>
                    <BiCategoryAlt className="icon"/>
                    <input
                    id="product-category"
                    type="text"
                    {...register('category', {
                        required: true
                    })}
                    />
                </div>
                <div className="input-product">
                    <label htmlFor="product-price">Precio </label>
                    <BiPurchaseTag className="icon"/>
                    <input
                    id="product-price"
                    type="number"
                    {...register('price', {
                        required: true
                    })}
                    />
                </div>
                <div className="isAvailable">
                    <h4>Disponible </h4>
                    <input
                    className="checkbox"
                    id="product-isAvailable"
                    type="checkbox"
                    {...register('isAvailable')}
                    />
                    <label htmlFor="product-isAvailable" className="back-checkbox"></label>
                </div>
                <button className="button-product" type="submit">Crear</button>
            </form>
        </div>
    )
}

export default ProductsForm