import { GrClose } from "react-icons/gr"
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"
import './components.css'

export default function Lightbox({
	products,
	slideIndex,
	nextSlide,
	previousSlide,
	setShowLightbox,
}) {
	return (
		<>
			<article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">

				<div className="flex items-center justify-center h-screen bg-black bg-opacity-75">
					{products.map((item, index) => (
						<div
							key={index}
							className={slideIndex === index + 1 ? "relative" : "hidden"}
						>
							<img
								src={item.mainImage}
								alt=""
								className="big-image lg:w-full lg:rounded-2xl"
							/>

				<button
					className=""
					onClick={() => setShowLightbox(false)}
				>
					<GrClose className="buttonClose"/>
					<button />
				</button>
							<ul>
								<li>
									<button
										onClick={previousSlide}
										className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
									>
										<BsChevronLeft />
									</button>
								</li>
								<li>
									<button
										onClick={nextSlide}
										className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
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
