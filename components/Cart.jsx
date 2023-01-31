
import { AiFillDelete } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"


export const Cart = ({ cart, updateQuantityCart, deleteProduct }) => {
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
						<h2 className="border-b border-slate-400 font-bold pb-2 ">Cart</h2>

						{cart.lenght === 0 ? (
							<div className="flex items-center space-y-4 flex-col">
								<h3 className="text-gray-500 text-lg font-semibold">
									Oops... Seems your cart is empty
								</h3>
								<button className=" bg-white text-blue-600 text-xs p-4 w-full lg:w-auto rounded-md hover:bg-blue-600 border border-blue-600 hover:border-white hover:text-white">
									ADD ITEMS
								</button>
							</div>
						) : (
							cart.map((item) => (
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
												{item.final_price * item.quantity}€
											</span>
										</li>
										<li className="text-slate-600 text-sm mt-2 ">
											<div className="flex items-center gap-1 mb-2">
												<p className="m-0">Quantity: </p>
												<select
													value={item.quantity}
													onChange={(e) =>
														updateQuantityCart({
															quantity: e.target.value,
															id: item.id,
														})
													}
													className="py-1 my-0 border-solid border-2 border-orange-600 flex-1 rounded text-center"
												>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
										</li>
									</ul>

									<button type="button" onClick={() => deleteProduct(item.id)}>
										<AiFillDelete />
									</button>
								</div>
							))
						)}
						
						<div>
							{location.pathname !== "/cart" && (
								<Link href="/cart">
									<button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
										Checkout
									</button>
								</Link>
							)}
						</div>
					</article>
				</div>
			</div>
		</>
	)
}
