import React, { useEffect, useState } from 'react'
import Card from '../Card'

import './index.scss'
const Flowers = () => {
  const [products, setProducts] = useState([])
  // const [loadind, setLoadind] = useState(true)
  async function getProducts() {
    const data = await fetch("http://localhost:5000/trees")
    const res = await data.json()
    console.log(res);
    setProducts(res)
    // setLoadind(false)
  }
  useEffect(() => {
    getProducts()
  }, [])

  console.log(products);

  return (
    <>
    <section id='Flower'>

   
<div className="CardArea">


      {products && products.map((item)=>(
        <div className='crd'>
      <Card key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}  />

        </div>

      ))}
</div>
 </section>


    </>

  )
}

export default Flowers