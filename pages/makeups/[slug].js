import { Header } from "../../components/Header"
import Layout from "../../components/Layout"
import Image from "next/image"
import Link from "next/link"


const entrandoShopping = ({ shoppingApi, slug }) => {
  
      const { brand, description, image, content } = 
		shoppingApi.data[0].attributes
	
      	const imageProduit = image.data.attributes.url
  return (
		<Layout>
			<Header></Header>

			<article className="lg:px-8 pb-10 grid lg:grid-cols-2 gap-10 place-items-center grid-cols-none max-w-7xl m-8">
				<Image
					width={700}
					className="object-contain h-70 w-96"
					height={600}
					priority="true"
					alt={`image produit ${description}`}
					src={imageProduit}
				></Image>
				<div>
					<h2 className="bg-slate-100 py-1 px-2 text-orange-600 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
						{brand}
					</h2>
					<p className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
						{description}
					</p>
					<p className="text-slate-600 mb-10 leading-relaxed whitespace-normal">
						{content}
					</p>
					<button className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-2 text-white font-bold rounded-lg shadow mt-4 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
						Add to bag
					</button>
				</div>
			</article>
		</Layout>
	)
}


export async function getStaticPaths() {
	const url = `${process.env.API_URL}/makeups?populate=*`
	const response = await fetch(url)
	const responseApi = await response.json()
	const paths = responseApi.data.map((rsp) => (
		{
		
		params: { slug: rsp.attributes.slug },
	}))

	return {
		paths,
		fallback: false,
	}
}


export async function getStaticProps({ params: { slug } }) {
	const urlMakeup = `${process.env.API_URL}/makeups?filters[slug][$eq]=${slug}&populate=*`
	const response = await fetch(urlMakeup)
	const shoppingApi = await response.json()
	

	return {
		props: {
			shoppingApi,
			slug
		},
		
	}
}


/*export async function getServerSideProps({ query: { id } }) {
  const url = `${process.env.API_URL}/makeups/${id}?populate=*`
	console.log(url)
	const response = await fetch(url)
	const shoppingApi = await response.json()
	console.log("Este es el producto:", shoppingApi)
	return {
		props: {
			shoppingApi,
		},
	}
}*/

export default entrandoShopping