import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Products = () => {
    const { id } = useParams()
    const url = "http://localhost:3000/products" + id

    const { data: product } = useFetch(url)

  return (
    <div>
        <p>Id do produto: { id } </p>
        <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    </div>
  )
}

export default Products