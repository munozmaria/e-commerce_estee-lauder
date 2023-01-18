
import React, {useState} from 'react'
import logo from "../images/estee-lauder-logo-vector.svg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { AiOutlineMenu } from "react-icons/ai"
import { Cart } from './Cart'





export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
	const [cartIsOpen, setCartIsOpen] = useState(false)
	return (
		<>
			<div className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-6xl mx-auto">
				<div className="flex items-center justify-start gap-4 ">
					<ul className="flex items-center justify-start gap-4 ">
						{!isOpen && (
							<li onClick={() => setIsOpen(true)} className="lg:hidden">
								<button className="cursor-pointer">
									<AiOutlineMenu />
								</button>
							</li>
						)}
						{isOpen && (
							<li onClick={() => setIsOpen(false)} className="lg:hidden close">
								<button className="cursor-pointer w-6 text-4xl">
									<GrClose className="text-4xl h-4 w-5" />
								</button>
							</li>
						)}
						<img src={logo} className="w-20" alt=""></img>
					</ul>

					<nav className={isOpen && "open"}>
						<ul className="">
							<li>Accueil</li>
							<li>Shopping</li>
							<li>Magasins</li>
							<li>Mes favoris</li>
							<li>Mon compte</li>
						</ul>
					</nav>
				</div>
				<div>
					<ul className="flex items-center justify-start gap-4">
						<li>
							<button onClick={() => setCartIsOpen(!cartIsOpen)}>
								<AiOutlineShoppingCart className="text-2xl text-slate-600" />
							</button>
						</li>

						<span>
							{cartIsOpen && (
								<Cart className=" bg-white rounded-2xl shadow-2xl gap-3 p-8 absolute md:w-full  lg:left-auto lg:top-20"></Cart>
							)}
						</span>
						<button>
							<BsFillPersonFill className="text-2xl  text-slate-600" />
						</button>
					</ul>
				</div>
			</div>
		</>
	)
}
