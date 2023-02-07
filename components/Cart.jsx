import { AiFillDelete } from "react-icons/ai"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Select from "react-select"

export const Cart = ({ cart, deleteProduct }) => {
	const objetcTE = {}
	cart.forEach((item) => (objetcTE[item.id] = item.quantity))

	const [setState] = useState(objetcTE)
	const handleSelectChange = (value, id) => {
		const idFinded = cart.find((element) => element.id === id)
		idFinded.quantity = value

		setState((prevState) => ({
			...prevState,
			[id]: value,
		}))
	}

	const suppliers = [
		{ label: "1", value: 1 },
		{ label: "2", value: 2 },
		{ label: "3", value: 3 },
		{ label: "4", value: 4 },
	]

	return (
		<>
			<div>
				<div>
					<article
						className="bg-white overflow-y-auto h-80 rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
						style={{
							zIndex: 1000,
						}}
					>
						<div className="mb-8">
							<Link href="/cart">
								<button className="bg-red-400 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-red-600 transition-all duration-200">
									Checkout
								</button>
							</Link>
						</div>

						{cart.lenght === 0 ? (
							<div className=" flex items-center space-y-4 flex-col">
								<h3 className="text-gray-500 text-lg font-semibold">
									Oops... Seems your cart is empty
								</h3>
								<button className=" bg-white text-blue-600 text-xs p-4 w-full lg:w-auto rounded-md hover:bg-blue-600 border border-blue-600 hover:border-white hover:text-white">
									ADD ITEMS
								</button>
							</div>
						) : (
							cart.map((item, index) => (
								<div
									key={index}
									className=" flex items-center justify-between mr-4 py-4 border-b-[2px] last:border-none"
								>
									<Image
										src={item.imageProduit}
										alt="image product cart"
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
												<Select
													defaultValue={{
														label: `${item.quantity}`,
														value: `${item.quantity}`,
													}}
													options={suppliers}
													onChange={(e) => {
														handleSelectChange(e.value, item.id)
													}}
												></Select>
											</div>
										</li>
									</ul>

									<button type="button" onClick={() => deleteProduct(item.id)}>
										<AiFillDelete />
									</button>
								</div>
							))
						)}
					</article>
				</div>
			</div>
		</>
	)
}
