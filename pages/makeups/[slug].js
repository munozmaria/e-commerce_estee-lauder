import { useState } from "react"
import { Header } from "../../components/Header"
import Layout from "../../components/Layout"
import Image from "next/image"



const entrandoShopping = ({ shoppingApi, addToCart }) => {
	//console.log(shoppingApi.data[0].id)
	const {
		brand,

		description,
		image,
		content,
		price,
		discount,
		final_price,
	} = shoppingApi.data[0].attributes

	const { id } = shoppingApi.data[0]

	const imageProduit = image.data[0].attributes.url
	const [quantity, setQuantity] = useState(1)
	const handleSubmit = (event) => {
		event.preventDefault()
		if (quantity < 1) {
			alert("Invalid quantity")
			return
		}

		const productAdded = {
			id,
			imageProduit,
			description,
			final_price,
			quantity,
		}
		addToCart(productAdded)
	}

	return (
		<Layout>
			<Header></Header>

			<article className="lg:px-8 pb-10 grid lg:grid-cols-2 gap-10 place-items-center grid-cols-none max-w-7xl m-8">
				<Image
					width={700}
					className="object-contain h-70 w-96"
					height={600}
					priority="true"
					alt={`image produit ${description}`}
					src={imageProduit}
				></Image>
				<div>
					<h2 className="bg-slate-100 py-1 px-2 text-orange-600 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
						{brand}
					</h2>
					<p className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
						{description}
					</p>
					<p className="text-slate-600 mb-10 leading-relaxed whitespace-normal">
						{content}
					</p>
					<div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 lg:mb-6">
						<ul className="flex items-center gap-4">
							<li className="font-bold text-slate-900 text-2xl">
								{final_price}€
							</li>
							<li className="bg-orange-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow">
								{discount}%
							</li>
						</ul>
						<p className="text-slate-600 text-sm">
							<s>{price}€</s>
						</p>
					</div>
					<form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
						<label className="mb-4">Quantity:</label>
						<select
							value={quantity}
							onChange={(e) => setQuantity(parseInt(e.target.value))}
							className="py-1 my-2 border-solid border-2 border-orange-600 flex-1  text-center rounded"
						>
							<option value="0">--Choose--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<input
							className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-2 text-white font-bold rounded-lg shadow mt-4 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200 cursor-pointer"
							type="submit"
							value="Add to bag"
						></input>
					</form>
				</div>
			</article>
		</Layout>
	)
}


export async function getStaticPaths() {
	const url = `${process.env.API_URL}/makeups?populate=*`
	const response = await fetch(url)
	const responseApi = await response.json()
	const paths = responseApi.data.map((rsp) => (
		{
		
		params: { slug: rsp.attributes.slug },
	}))

	return {
		paths,
		fallback: false,
	}
}


export async function getStaticProps({ params: { slug } }) {
	const urlMakeup = `${process.env.API_URL}/makeups?filters[slug][$eq]=${slug}&populate=*`
	const response = await fetch(urlMakeup)
	const shoppingApi = await response.json()
	

	return {
		props: {
			shoppingApi,
			slug
		},
		
	}
}




export default entrandoShopping