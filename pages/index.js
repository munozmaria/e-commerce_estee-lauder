
import { Home } from "../components/Home";
import Layout from "../components/Layout";



export default function Index({cart, deleteProduct, updateQuantity}) {

	return (
		<>
			<Layout
				cart={cart}
				deleteProduct={deleteProduct}
				updateQuantity={updateQuantity}
			>
				<Home></Home>
			</Layout>
		</>
	)


}