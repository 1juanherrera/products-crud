import axios from 'axios'
import { useState,useEffect } from 'react'
import './App.css'
import ProductsForm from './components/ProductsForm'
import ProductsList from './components/ProductsList'

function App() {

  const [ products, setProducts ] = useState([])
  const [ productsData, setProductsData ] = useState(null)

  const getApiProducts = () => {
    axios
      .get('https://products-crud.academlo.tech/products/')
      .then(resp => setProducts(resp.data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getApiProducts()
  }, [])

  const addProduct = (data) => {
    axios
    .post(`https://products-crud.academlo.tech/products/`, data)
    .then(() => getApiProducts())
    .catch(error => console.error(error))
  }

  const deleteProduct = (productId) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${productId}/`)
      .then(() => getApiProducts())
      .catch(error => console.error(error))
  }

  const updateProduct = (productData) => {
    axios 
      .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
      .then(() => getApiProducts())
      .catch(error => console.error(error))   

      setProductsData(null)
  }

    const selectProduct = (data) => {
      setProductsData(data)
    }

  return (
    <div>
      <h1>CRUD PRODUCTS</h1>
      <div className='App'>
      < ProductsForm 
      createProduct={(data) => addProduct(data)}
      productSelectedData={productsData}
      updateProduct={updateProduct}
      />
      < ProductsList 
      products={products}
      selectProduct={selectProduct}
      deleteProduct={deleteProduct}
      />
      </div>
    </div>
  )
}

export default App
