import Head from "next/head";
import { Cart } from "./Cart";
import { Header } from "./Header";


export default function Layout({ children, cart, deleteProduct}) {
    
    return (
			<div>
				<Head>
					<title>Cosmetics Ecommerce </title>
					<meta
						name="description"
						content="Ecommerci site to cosmetics website"
					/>
				</Head>

				<Header cart={cart} deleteProduct={deleteProduct}></Header>
				{children}
			</div>
		)
}