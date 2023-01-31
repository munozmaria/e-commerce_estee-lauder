

import React, { useState } from "react"

import Image from "next/image"

import Lightbox from "../components/Lightbox"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'




import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"

import Layout from "../components/Layout"





const Accueil = ({ productsApi, addToCart, cart, deleteProduct }) => {
	const productsApiArray = productsApi.data
    //console.log(productsApi.data.length)
	const {
		brand,
		content,
		description,
		image,
		price,
		discount,
		final_price,
		
	} = productsApi.data[0].attributes
	
	
	const imageProduit = image.data[0].attributes.url

	const { id } = productsApi.data[0]

	const [value, setValue] = useState(0)
	const [amount, setAmount] = useState(0)
	const [slideIndex, setSlideIndex] = useState(1)
	const [showLightbox, setShowLightbox] = useState(false)

	const [productAdd, setProductAdd] = useState("")

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



	const nextSlide = () => {
		if (slideIndex !== productsApiArray.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === productsApiArray.length) {
			setSlideIndex(1)
		}
	}
	const previousSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(productsApiArray.length)
		}
	}

	

 
	//console.log(productsApi.data[0].attributes.image)
    
	return (
		<>
			<Layout cart={cart} deleteProduct={deleteProduct}>
				{showLightbox && (
					<Lightbox
						className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50"
						products={productsApi}
						slideIndex={slideIndex}
						nextSlide={nextSlide}
						previousSlide={previousSlide}
						setShowLightbox={setShowLightbox}
					/>
				)}

				<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  lg:place-items-center lg:py-20">
					<article>
						<div className="lg:hidden">
							{productsApiArray.map((item, id) => (
								<div
									key={id}
									className={slideIndex === id + 1 ? "relative" : "hidden"}
								>
									<Image
										priority="true"
										src={item.attributes.image.data[0].attributes.url}
										width={800}
										height={600}
										alt=""
										className="w-full lg:rounded-2xl  cursor-pointer imageGlobal"
										onClick={() => setShowLightbox(true)}
									></Image>
									<ul className="lg:hidden">
										<li>
											<button
												onClick={previousSlide}
												className="bg-white rounded-full font-bold p-4 shadow absolute left-4 top-1/2 -translate-y-1/2 "
											>
												<BsChevronLeft />
											</button>
										</li>
										<li>
											<button
												onClick={nextSlide}
												className="bg-white rounded-full font-bold  p-4 shadow absolute right-4 top-1/2 -translate-y-1/2"
											>
												<BsChevronRight />
											</button>
										</li>
									</ul>
								</div>
							))}
						</div>
						<div className="hidden lg:block">
							<Image
								src={imageProduit}
								width={800}
								height={600}
								alt=""
								className="w-full lg:rounded-2xl cursor-pointer imageGlobal"
								onClick={() => setShowLightbox(true)}
								priority="true"
							/>
						</div>
						<ul className="hidden lg:flex items-center p-8 justify-start gap-5 flex-wrap max-w-6xl mx-auto mt-5">
							{productsApiArray.map((item, index) => (
								<li
									key={id}
									onClick={() => setValue(index)}
									className={`${
										index === value && "border-2 border-orange-300 opacity-80"
									} border-2 rounded-2xl overflow-hidden cursor-pointer`}
								>
									<Image
										src={item.attributes.image.data[0].attributes.url}
										className="w-20 imageGlobal"
										width={800}
										height={600}
										priority="true"
									></Image>
								</li>
							))}
						</ul>
					
					<div className="px-8 pb-10">
						<h2 className="bg-slate-100 py-1 px-2 text-orange-600 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
							{brand}
						</h2>
						<h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
							{description}
						</h1>

						<div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
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
				</section>
			</Layout>
		</>
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

export default Accueil
