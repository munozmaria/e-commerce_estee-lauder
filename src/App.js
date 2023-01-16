import { useState } from 'react';

import { data } from './data';
import logo from "./images/estee-lauder-logo-vector.svg"
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"

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
  const{mainImage} = products[value]

  return (
		<>
			<Header></Header>

			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
				<article>
					<img src={mainImage} alt="" className="w-11/12 rounded-2xl"></img>
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
				<article>
					<h1>Lorem reorzoruzorz</h1>
				</article>
			</section>
		</>
	)
}

export default App;
