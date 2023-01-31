
import image1Thumb from "../images/pic3-thumbnail.jpg"
import { AiFillDelete } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"


export const Cart = ({ cart, deleteProduct }) => {
	console.log(cart)
	const [total, setTotal] = useState(0)
	useEffect(() => {
		const getTotal = cart.reduce(
			(total, item) => total + item.quantity * item.final_price,
			0
		)
		setTotal(getTotal)
	}, [cart])

	return (
		<>
			<div>
				<div>
					<article
						className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
						style={{
							zIndex: 1000,
						}}
					>
						<h2 className="border-b border-slate-400 font-bold pb-2 ">
							My account
						</h2>

						{cart.lenght === 0
							? "empty cart"
							: cart.map((item) => (
									<div className="flex items-center justify-between mr-4 py-4 border-b-[2px] last:border-none">
										<Image
											src={item.imageProduit}
											alt=""
											width={800}
											height={600}
											className="rounded-lg w-14 imageGlobal"
											priority="true"
										/>
										<ul className="" style={{ flexDirection: "column" }}>
											<li className="text-slate-600 text-sm">
												{item.description}
											</li>
											<li className="text-slate-600 text-sm">
												<span className="font-bold text-slate-900">
													{item.final_price}€
												</span>
											</li>
										</ul>

										<button onClick={() => deleteProduct(item.id)}>
											<AiFillDelete />
										</button>
									</div>
							  ))}
						<Link href="/cart">
							<button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
								Checkout
							</button>
						</Link>
					</article>
				</div>
			</div>
		</>
	)
}
