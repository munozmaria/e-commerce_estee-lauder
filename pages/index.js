
import App from "next/app";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import Layout from "../components/Layout";



export default function Index({cart, deleteProduct}) {

	return (
		<>
			<Layout cart={cart} deleteProduct={deleteProduct}>
				<Home></Home>
			</Layout>
		</>
	)


}