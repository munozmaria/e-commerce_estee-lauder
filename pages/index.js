import Link from "next/link"
import Layout from "../components/Layout"

export default function Index({ cart, deleteProduct, updateQuantity }) {
	return (
		<>
			<Layout
				cart={cart}
				deleteProduct={deleteProduct}
				updateQuantity={updateQuantity}
			></Layout>

			<div className="pt-20">
				<section className="py-40  min-h-screen bg-[url('../images/estelauderModel.jpg')] bg-no-repeat bg-cover bg-center">
					<div className="flex items-center rounded max-w-6xl mx-auto bg-white bg-opacity-50 font-serif  p-4 md:p-4 md:px-6 ">
						<article className="px-8 pb-2">
							<h3 className="text-5xl  pb-2">Your Gift,</h3>
							<h3 className="text-5xl  pb-8">Your Choice,</h3>
							<span className="italic text-sm">All the best for your skin</span>
							<p className="pb-10 pt-10 italic">
								To the beauty favourites loved by customers all year round.
							</p>
							<Link href="/makeups">
								<button className="text-gray-700 bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 font-semibold duration-700">
									Shop Now
								</button>
							</Link>
						</article>
					</div>
				</section>

				<section className="lg:p-20 min-h-screen pt-40  max-w-6xl mx-auto gap-8 place-items-center lg:pt-40">
					<h1 className="bg-pink-50 p-4 mb-10  font-bold text-3xl  lg:text-5xl text-center text-gray-700">
						#EsteeLauder
					</h1>
					<div className="grid  items-center gap-8 md:grid-cols-2">
						<div>
							<video
								controls
								preload="auto"
								playsInline
								autoPlay
								muted
								loop
								width={"1300px"}
								height={"800px"}
								className="rounded border-2 shadow-lg shadow-pink-20 0/50 object-cover"
							>
								<source
									src={require("../assets/esteelauder.mp4")}
									type="video/mp4"
								/>
							</video>
						</div>
						<div className="px-8 rounded  ">
							<h2 className="italic pb-4  font-light text-3xl ">With love</h2>

							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
								dicta tempora error.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
