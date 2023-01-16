import { useState } from 'react';

import { data } from './data';
import logo from "./images/estee-lauder-logo-vector.svg"
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"

import './App.css';


function Header() {
  return (
		<>
			<header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-6xl mx-auto">
				<div className="flex items-center justify-start gap-4">
					<img src={logo} className="w-20" alt=""></img>
					<nav className="hidden">
						<ul className="flex items-center justify-start gap-4">
							<li>Accueil</li>
							<li>Shopping</li>
							<li>Magasins</li>
							<li>Mes favoris</li>
							<li>Mon compte</li>
						</ul>
					</nav>
				</div>
				<div>
					<ul>
						<li className="flex items-center justify-start gap-4">
							<button   >
								<AiOutlineShoppingCart className="text-2xl text-slate-600" />
							</button>
							<button  >
								<BsFillPersonFill className="text-2xl  text-slate-600" />
							</button>
						</li>
						<li></li>
					</ul>
				</div>
			</header>
		</>
	)
}

function Lightbox({products, slideIndex, nextSlide, previousSlide, index}) {
  return (
		<>
			<article className="bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 z-50">
        <div>
          {products.map((item, index) => (
          <div
								key={index}
								className={slideIndex === index + 1 ? "relative" : "hidden"}
							>
								<img
									src={item.mainImage}
									alt=""
									className="lg:rounded-2xl"
								></img>
								<ul >
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
          ))}
        </div>
			</article>
		</>
	)
}

function App() {

  const [products] = useState(data)
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState(0)
  const [slideIndex, setSlideIndex] = useState(1)
  
  const { mainImage } = products[value]
  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === products.length) {
      setSlideIndex(1)
    }
  }
  const previousSlide = () => {
    if (setSlideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(products.length)
    }
    }

  const handleMinus = () => {
    setAmount(amount - 1)
    if(amount <= 0) setAmount(0)
  }
  return (
		<>
			<Header></Header>

			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  lg:place-items-center lg:py-20">
				<article>
					<div className="relative">
						<img src={mainImage} alt="" className="w-full lg:rounded-2xl"></img>
						<ul>
							<li>
								<button className="bg-white rounded-full font-bold p-4 shadow absolute left-4 top-1/2 -translate-y-1/2 ">
									<BsChevronLeft />
								</button>
							</li>
							<li>
								<button className="bg-white rounded-full font-bold  p-4 shadow absolute right-4 top-1/2 -translate-y-1/2">
									<BsChevronRight />
								</button>
							</li>
						</ul>
					</div>{" "}
					<ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap  mt-5">
						{products.map((item, index) => (
							<li
								key={item.id}
								onClick={() => setValue(index)}
								className={`${
									index === value && "border-2 border-orange-300 opacity-80"
								} border-2 rounded-2xl overflow-hidden cursor-pointer`}
							>
								<img src={item.thumbnail} alt="" className="w-20 "></img>
							</li>
						))}
					</ul>
				</article>
				<article className="px-8 pb-10">
					<h2 className="bg-slate-100 py-1 px-2 text-orange-600 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
						ESTÉE LAUDER
					</h2>
					<h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
						DOUBLE WEAR STAY-IN-PLACE MAKEUP SPF10 30ML - Fond de teint
					</h1>

					<div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
						<ul className="flex items-center gap-4">
							<li className="font-bold text-slate-900 text-2xl">23.5€</li>
							<li className="bg-orange-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow">
								30%
							</li>
						</ul>
						<p className="text-slate-600 text-sm">
							<s>42.50€</s>
						</p>
					</div>
					<div className="mt-10 lg:flex items-center justify-between gap-2">
						<ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
							<li
								onClick={handleMinus}
								className="text-orange-600 cursor-pointer"
							>
								<AiOutlineMinus />
							</li>
							<li>{amount}</li>
							<li
								onClick={() => setAmount(amount + 1)}
								className="text-orange-600 cursor-pointer"
							>
								<AiOutlinePlus />
							</li>
							<li></li>
						</ul>
						<div className="lg:flex-1">
							<button className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-4 text-white font-bold rounded-lg shadow mt-4 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
								<AiOutlineShoppingCart /> Ajouter au panier
							</button>
						</div>
					</div>
				</article>
			</section>
		</>
	)
}

export default App;
