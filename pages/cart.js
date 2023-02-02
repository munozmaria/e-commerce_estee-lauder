import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/Layout"
import Link from "next/link"


const CartPage = ({ cart, updateQuantity, deleteProduct }) => {
	console.log(cart)

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const getTotal = cart.reduce((total, item) => total + (item.quantity * item.final_price), 0)
        setTotal(getTotal)
	}, [cart]);
	
	
   
	//console.log(cart)
	return (
		<>
			<Layout
				cart={cart}
				deleteProduct={deleteProduct}
				updateQuantity={updateQuantity}
			></Layout>
			<div className=" p-8 py-40 pb-10 max-w-6xl mx-auto gap-8 place-items-center">
				<h1 className=" mb-10 font-bold text-3xl lg:text-5xl text-center text-orange-700">
					Shopping Cart
				</h1>
				<main className="grid lg:grid-cols-2 gap-20 items-start grid-cols-none ">
					<div className="px-4 ">
						<h2 className="font-bold mt-2  mb-6 text-lg underline ">
							Products
						</h2>
						{cart.lenght === 0
							? "empty cart"
							: cart.map((item) => (
									<div
										className="grid grid-cols-2 gap-5 items-center py-4 border-b-[2px] last:border-none  "
										key={item.id}
									>
										<div>
											<Image
												width={250}
												height={500}
												src={item.imageProduit}
											></Image>
										</div>

										<div>
											<p className="text-slate-900 mb-6 mt-8 font-bold text-2xl lg:text-2xl">
												{item.description}
											</p>
											<div className="flex items-center gap-1 mb-2">
												<p className="m-0">Quantity: </p>
												<select
													value={item.quantity}
													onChange={(e) =>
														updateQuantity({
															quantity: e.target.value,
															defaultValue: 0,
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
											<p className="font-bold text-slate-600 text-1xl mb-2">
												{item.final_price}€
											</p>
											<p className="font-bold">
												Total: <span>{item.final_price * item.quantity}€</span>{" "}
											</p>
										</div>
										<button
											type="button"
											onClick={() => deleteProduct(item.id)}
											className="rounded-lg px-2 mt-6 py-1 bg-red-600 text-red-100 hover:bg-red-700 hover:cursor-pointer duration-300 -top-4 -right-3 "
										>
											Delete
										</button>
									</div>
							  ))}
					</div>
					<div className="bg-gray-200 pb-8 px-5 text-center rounded">
						{total > 0 ? (
							<>
								<p className="font-bold mt-2 text-lg underline">
									Total
								</p>
								<p className="italic">Subtotal: {total}€</p>
							</>
						) : (
							<div className="flex items-center space-y-4 flex-col">
								<h3 className="text-gray-500 text-lg font-semibold">
									Oops... Seems your cart is empty
								</h3>
								<Link href="/makeups">
									<button className=" bg-white text-orange-600 text-xs p-2 w-full lg:w-auto rounded-md hover:bg-orange-600 border border-orange-600 hover:border-white hover:text-white">
										ADD ITEMS
									</button>
								</Link>
							</div>
						)}
					</div>
				</main>
			</div>
		</>
	)
}

export default CartPage