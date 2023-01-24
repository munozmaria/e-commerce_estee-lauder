import React from 'react'
import { Header } from '../components/Header'
import Layout from '../components/Layout'
import { Products } from '../components/Products'


const Makeups = ({ productsApi }) => {
	const productsApiArray = productsApi.data

	return (
		<Layout>
			<Header></Header>
			<main className="">
				<div>
					{productsApiArray.map((item) => (
						<Products key={item.id} item={item} />
					))}
				</div>
			</main>
		</Layout>
	)
}

export async function getStaticProps() {
     const url = `${process.env.API_URL}/makeups?populate=*`
			const response = await fetch(url)
  const productsApi = await response.json()

    return {
			props: {
				productsApi: productsApi,
			
			},
		}
}

export default Makeups