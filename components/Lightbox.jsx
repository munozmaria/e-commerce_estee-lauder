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

	

	const productsArray = products.data


	const [current, setCurrent] = useState(0)
	const length = image.data.length

	function nextSlide() {
		console.log(current)
		setCurrent(current === length - 1 ? 0 : current + 1)
		console.log(current, image.data[current].attributes.url)
	}

	function previousSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}



	

	return (
		<>
			<article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
				<div className="flex items-center justify-center h-screen  ">
					<div>
						{productsArray.map((item, index) => (
							<Image
								key={item.id}
								src={image.data[current].attributes.url}
								width={800}
								height={600}
								alt="image lightbox "
								className={
									index === current
										? "relative big-image  lg:mt-3 lg:mb-5 lg:rounded-2xl imageGlobal object-contain "
										: "hidden" &&
										  " big-image  lg:rounded-2xl lg:mt-3 lg:mb-5 imageGlobal object-contain"
								}
								priority="true"
							/>
						))}
						<button
							className="bg-white rounded-full font-bold p-4  items-center shadow absolute top-3 right-4 text-orange-600"
							onClick={() => setShowLightbox(false)}
						>
							<GrClose />
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
				</div>
			</article>
		</>
	)
}
