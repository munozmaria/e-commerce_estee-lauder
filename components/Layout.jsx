import Head from "next/head"
import { Header } from "./Header"

export default function Layout({ children, cart, deleteProduct }) {
	return (
		<div>
			<Head>
				<title>Cosmetics Ecommerce </title>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
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
