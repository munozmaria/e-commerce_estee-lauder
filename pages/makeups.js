import React from "react"
import Layout from "../components/Layout"
import { Products } from "../components/Products"

const Makeups = ({ productsApi, cart, deleteProduct, updateQuantity }) => {
	console.log(productsApi)
	const productsApiArray = productsApi.data

	return (
		<>
			<Layout
				cart={cart}
				deleteProduct={deleteProduct}
				updateQuantity={updateQuantity}
			></Layout>
			<main className="py-40">
				<div>
					{productsApiArray.map((item) => (
						<Products key={item.id} item={item} />
					))}
				</div>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const url = `http://localhost:1337/api/makeups?populate=*`
	const response = await fetch(url)
	const productsApi = await response.json()

	return {
		props: {
			productsApi: productsApi,
		},
	}
}

export default Makeups
