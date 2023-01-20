import React from 'react'
import Layout from '../components/Layout'
import { Products } from '../components/Products'


const Shopping = ({ productsApi }) => {
  const productsApiArray = productsApi.data
 
     return (
    <Layout >
      <main className=''>
          <h1>Estos son los productos</h1>
        <div>
             {productsApiArray.map(item => <Products
               key={item.id}
               item ={item}
             />)}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
     const url = "http://localhost:1337/api/makeups?populate=*"
			const response = await fetch(url)
			const productsApi = await response.json()
			
    return {
        props: {
                productsApi: productsApi
        }
    }
}

export default Shopping