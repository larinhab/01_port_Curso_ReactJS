import { response } from 'express'
import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"


function App() {
  const [ products, setProducts ] = useState([])
 
  /* CUSTOM HOOK */
  const { data: items } = useFetch(url)

 // useEffect(() => {
 //   async function getData() {
 //     const res = await fetch(url)
  
  //    const data = await res.json()
  
  //    setProducts(data)
  //  }
  //
 //   getData()
 //}, [])

  /* ENVIO DE DADOS: */
  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }

    const res = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  /* CARREGAMENTO DINAMICO */
    // const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])

  return (

    <>
     <div className='App'>
      <h1>HTTP EM REACT</h1>

      <ul>
        {/* RESGATE DE DADOS: */}
          {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - 
              R${product.price}
            </li>
          ))
          }
      </ul>

      {/* ENVIO DE DADOS: */}

      <div className='add-product'>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="">
            <span>Nome</span>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} />
          </label>

          <label htmlFor="">
            <span>Price</span>
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} />
          </label>

          <button type="text" value="Enviar" />
        </form>
      </div>
     </div>
    </>
  )
}

export default App
