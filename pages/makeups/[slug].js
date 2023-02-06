import { useState } from "react"
import Layout from "../../components/Layout"
import Image from "next/image"
import Lightbox from "../../components/Lightbox"


const entrandoShopping = ({
	shoppingApi,
	addToCart,
	cart,
	deleteProduct,
	updateQuantity,
	productsSlug,
}) => {
	

	
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

	const [imageProduit, setImageProduit] = useState(image.data[0].attributes.url)

	const [quantity, setQuantity] = useState(1)

	const [value, setValue] = useState(0)
	const [showLightbox, setShowLightbox] = useState(false)

	const [Btn, setBtn] = useState(false)

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
		<>
		

			<Layout
				cart={cart}
				deleteProduct={deleteProduct}
				updateQuantity={updateQuantity}
			></Layout>
			{showLightbox && (
				<Lightbox
					className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50"
					products={productsSlug}
					setShowLightbox={setShowLightbox}
				/>
			)}
			<article className="lg:px-8 pb-10 py-40 grid lg:grid-cols-2 gap-10 place-items-center grid-cols-none mx-auto max-w-6xl">
				<div>
					<Image
						width={700}
						className="object-contain h-70 w-96 cursor-zoom-in "
						height={600}
						priority="true"
						alt={`image produit ${description}`}
						src={imageProduit}
						onClick={() => {
							setShowLightbox(true)
						}}
					></Image>

					<ul className="hidden lg:flex items-center p-8 justify-start gap-5 flex-wrap max-w-6xl mx-auto mt-5">
						{productsSlug.data.map((item, index) =>
							item.attributes.image.data.map((image, index) => (
								<li
									key={image.id}
									onClick={() => {
										setValue(index)
										setImageProduit(image.attributes.url)
									}}
									className={`${
										index === value && "border-2 border-orange-300 opacity-80"
									} border-2 rounded-2xl overflow-hidden cursor-pointer`}
								>
									<Image
										src={image.attributes.url}
										className="w-20 imageGlobal"
										width={800}
										height={600}
										priority="true"
										alt="image cart"
									></Image>
								</li>
							))
						)}
					</ul>
				</div>
				<div className="p-8">
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
							<li className="bg-red-100 py-1 px-2 text-red-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow">
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
							className="py-1 my-2 border-solid border-2 border-red-600 flex-1  text-center rounded"
						>
							<option value="0">--Choose--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<input
							onClick={() => setBtn(true)}
							className="flex items-center justify-center gap-4 bg-red-400 py-2 px-2 text-white font-bold rounded-lg shadow mt-4 w-full lg:mt-0 hover:bg-red-600 transition-all duration-200 cursor-pointer"
							type="submit"
							value="Add to bag"
						></input>
					</form>
				</div>
			</article>
		</>
	)
}

export async function getStaticPaths() {
	const url = `${process.env.API_URL}/makeups?populate=*`

	const response = await fetch(url)
	const responseApi = await response.json()

	const paths = responseApi.data.map((rsp) => ({
		params: { slug: rsp.attributes.slug },
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const urlMakeup = `${process.env.API_URL}/makeups?filters[slug][$eq]=${slug}&populate=*`

	const urlThumbsProducts = `${process.env.API_URL}/products?filters[slug2][$eq]=${slug}&populate=*`

	const [resMakeup, resThumbsProducts] = await Promise.all([
		fetch(urlMakeup),
		fetch(urlThumbsProducts),
	])
	const [shoppingApi, productsSlug] = await Promise.all([
		resMakeup.json(),
		resThumbsProducts.json(),
	])

	return {
		props: {
			shoppingApi,
			slug,
			productsSlug,
		},
	}
}

export default entrandoShopping
