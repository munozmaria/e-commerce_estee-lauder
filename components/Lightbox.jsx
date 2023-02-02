import { GrClose } from "react-icons/gr"
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"
import Image from "next/image"
import { useState } from "react"

export default function Lightbox({
	products,

	setShowLightbox,
}) {
	const { image } = products.data[0].attributes

	const [imageProduit, setImageProduit] = useState(image.data[0].attributes.url)

	const [slideIndex, setSlideIndex] = useState(1)
	const [holaJuan, setHolaJuan] = useState(1)

	const productsArray = products.data

	const nextSlide = () => {
		console.log(image.data.length)
		//console.log(products.data[0].attributes.image.data[slideIndex].attributes.url)
		if (holaJuan !== image.data.length) {
			console.log("hola")
			setSlideIndex(holaJuan + 1)
		} else if (holaJuan === image.data.length) {
			console.log("adios")
			setSlideIndex(1)
		}

		setImageProduit(image.data[holaJuan].attributes.url)
		//console.log(products.data[0].attributes.image.data)
		console.log(slideIndex)
	}

	const previousSlide = () => {
		if (slideIndex !== 1) {
			console.log("hola")
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			console.log("adios")
			setSlideIndex(products.data[0].attributes.image.data.length)
		}
		setImageProduit(image.data[3].attributes.url)
	}

	return (
		<>
			<article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
				<div className="flex items-center justify-center h-screen  ">
					{productsArray.map((item, index) => (
						<div
							key={index}
							className={holaJuan === index + 1 ? "relative" : "hidden"}
						>
							<Image
								src={imageProduit}
								width={800}
								height={600}
								alt=""
								className="big-image lg:w-full lg:rounded-2xl imageGlobal"
								priority="true"
							/>

							<button className="" onClick={() => setShowLightbox(false)}>
								<GrClose className="buttonClose" />
								<button />
							</button>
							<ul>
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
			</article>
		</>
	)
}
