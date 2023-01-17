
import React, {useState} from 'react'
import logo from "../images/estee-lauder-logo-vector.svg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { AiOutlineMenu } from "react-icons/ai"





export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
		const [cartIsOpen, setCartIsOpen] = useState(false)
	return (
		<>
			<header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-6xl mx-auto">
				<div className="flex items-center justify-start gap-4">
					<ul className="flex items-center justify-start gap-4">
						{!isOpen && (
							<li onClick={() => setIsOpen(true)} className="lg:hidden">
								<img
									src={<AiOutlineMenu />}
									alt=""
									className="cursor-pointer"
								/>
							</li>
						)}
						{isOpen && (
							<li onClick={() => setIsOpen(false)} className="lg:hidden close">
								<img src={<GrClose />} alt="" className="cursor-pointer w-6" />
							</li>
						)}
					</ul>

					
						<img src={logo} className="w-20" alt=""></img>
			
					<nav className={isOpen && "open"}>
						<ul className="flex items-center justify-start gap-4 ">
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
						<li>{cartIsOpen}</li>
						<button>
							<BsFillPersonFill className="text-2xl  text-slate-600" />
						</button>
					</ul>
				</div>
			</header>
		</>
	)
}
