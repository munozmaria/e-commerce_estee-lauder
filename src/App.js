import { useState } from 'react';

import { data } from './data';
import logo from "./images/estee-lauder-logo-vector.svg"
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"

import './App.css';

function Header() {
  return (
		<>
			<header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-6xl mx-auto">
				<div className="flex items-center justify-start gap-4">
					<img src={logo} className="w-20" alt=""></img>
					<nav>
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
							<button>
								<AiOutlineShoppingCart />
							</button>
							<button>
								<BsFillPersonFill />
							</button>
						</li>
						<li></li>
					</ul>
				</div>
			</header>
		</>
	)
}

function App() {

  const [products] = useState(data)

  const [value, setValue] = useState(0)
  const { mainImage } = products[value]
  const [amount, setAmount] = useState(0)

  const handleMinus = () => {
    setAmount(amount - 1)
    if(amount <= 0) setAmount(0)
}
  return (
		<>
			<Header></Header>

			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
				<article>
					<img src={mainImage} alt="" className="w-full rounded-2xl"></img>
					<ul className="flex items-center justify-start gap-5 flex-wrap  mt-5">
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

					<div className="flex flex-wrap items-center justify-between">
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
					<div className="mt-10">
						<ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
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

						<button className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-4 text-white font-bold rounded-lg shadow mt-4 w-full">
							<AiOutlineShoppingCart /> Ajouter au panier
						</button>
					</div>
				</article>
			</section>
		</>
	)
}

export default App;
