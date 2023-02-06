import { useState, useEffect } from "react"
import "../global-styles/normalize.css"
import "../global-styles/main.module.css"
import "../global-styles/components-styles.css"




export default function App({ Component, pageProps }) {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const cartLocalStorage = JSON.parse(localStorage.getItem('cart')) ?? [];
		setCart(cartLocalStorage);
	}, [])
	useEffect(() => { 
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart])
	const addToCart = product => {
		if (cart.some(makeup => makeup.id === product.id)) { 
			const cartWithProduct = cart.map(makeup => {
				if (makeup.id === product.id) {
						makeup.quantity = product.quantity
				}
				return makeup
			})
			
		setCart(cartWithProduct)
		} else {
			setCart([...cart, product])
		}
		
	}



	//quantity cart
	const updateQuantity = product => {
		const cartWithProduct = cart.map((makeup) => {
			if (makeup.id === product.id) {
				makeup.quantity = product.quantity
			}
			return makeup
		})
		setCart(cartWithProduct)
	}

	
	
	//delete product
	const deleteProduct = id => { 
		const updateCart = cart.filter(item => item.id !== id);
		setCart(updateCart)
	}

	
	

	


	return (
		<>
		
			<Component
				{...pageProps}
				cart={cart}
				addToCart={addToCart}
				updateQuantity={updateQuantity}
				deleteProduct={deleteProduct}
			></Component>
		</>
	)
}
