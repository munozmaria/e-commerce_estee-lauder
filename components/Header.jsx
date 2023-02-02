import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/estee-lauder-logo-vector.svg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import { AiOutlineMenu } from "react-icons/ai"
import { Cart } from "./Cart"

export const Header = ({ cart, deleteProduct, updateQuantity }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [cartIsOpen, setCartIsOpen] = useState(false)

	const wrapperRef = useRef(null)
	const buttonRef = useRef(null)
	useOutsideAlerter(wrapperRef, buttonRef)


	function useOutsideAlerter(ref, ref2) {
		useEffect(() => {
			
			function handleClickOutside(event) {
				
				if (
					cartIsOpen &&
					ref.current &&
					!ref.current.contains(event.target) &&
					!ref2.current.contains(event.target)
				) {
					setCartIsOpen(false)
					setIsOpen(false)
					
				}
			}
		
			document.addEventListener("mousedown", handleClickOutside)
			return () => {
			
				document.removeEventListener("mousedown", handleClickOutside)
			}
		}, [ref, cartIsOpen])
	}

	return (
		<>
			<header className="fixed w-full bg-white">
				<div className="este-lauder-image relative flex items-center justify-between px-8 py-2 border-b border-slate-400 max-w-6xl mx-auto ">
					<div className="flex items-center justify-start gap-4  ">
						<ul className="flex items-center justify-start gap-4 ">
							{!isOpen && (
								<li onClick={() => setIsOpen(true)} className="lg:hidden">
									<button className="cursor-pointer">
										<AiOutlineMenu />
									</button>
								</li>
							)}
							{isOpen && (
								<li
									onClick={() => setIsOpen(false)}
									className="lg:hidden close"
								>
									<button className="cursor-pointer w-6 text-4xl">
										<GrClose className="text-4xl h-4 w-5" />
									</button>
								</li>
							)}
							<Link href="/">
								<Image
									src={logo}
									className="w-20 imageGlobal"
									alt="Image Logo"
									priority="true"
								></Image>
							</Link>
						</ul>

						<nav className={isOpen && "open"}>
							<ul className="">
								<Link href="/makeups">All</Link>
								<li>Our shops</li>
								<li>Gift Cards</li>
								<li>Sell</li>
							</ul>
						</nav>
					</div>
					<div>
						<ul className="flex items-center justify-start gap-4">
							<Link href="/cart">
								<button>
									<AiOutlineShoppingCart className="text-2xl text-slate-600" />
								</button>
							</Link>

							<li>
								<button
									ref={buttonRef}
									onClick={() => {
										setCartIsOpen(!cartIsOpen)
										setIsOpen(false)
									}}
								>
									<BsFillPersonFill className="text-2xl  text-slate-600" />
								</button>
							</li>
							<span ref={wrapperRef}>
								{cartIsOpen && (
									<Cart
										cart={cart}
										deleteProduct={deleteProduct}
										updateQuantity={updateQuantity}
										className="overflow-auto md:overflow-scroll"
									></Cart>
								)}
							</span>
						</ul>
					</div>
				</div>
			</header>
		</>
	)
}
