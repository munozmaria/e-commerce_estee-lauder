import React, {useEffect} from 'react'
import Layout from '../components/Layout'

 const Shopping = () => {

    useEffect(() => {
        const testingApi = async (req, res, next) => {
            const url = "http://localhost:1337/api/makeups"
            const response = await fetch(url)
            const result = await response.json()
            console.log(result)
        }
        testingApi()
        },[])

  return (
      <Layout>
          <h1>Estos son los productos</h1>
    </Layout>
  )
}

export default Shopping