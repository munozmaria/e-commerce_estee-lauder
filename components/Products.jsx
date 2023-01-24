import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Products = ({ item }) => {
    console.log(item)

	const { brand, content, description, image, price, discount, final_price, id} = item.attributes
	const {slug} = item.attributes
    
  
    const imageProduit = image.data.attributes.url
   
  return (
		<article className="lg:px-8 pb-10 grid lg:grid-cols-2 gap-10 place-items-center grid-cols-none">
			<Image
				priority="true"
				className="object-contain h-70 w-96"
				width={800}
				height={600}
				src={imageProduit}
				alt={`image produit ${description}`}
			></Image>
			<div className="p-8">
				<h2 className="bg-slate-100 py-1 px-2 text-orange-600 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
					{brand}
				</h2>
				<h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
					{description}
				</h1>
				<p className="text-slate-600 mb-10 leading-relaxed">{content}</p>
				<div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 lg:mb-6">
					<ul className="flex items-center gap-4">
					  <li className="font-bold text-slate-900 text-2xl">{final_price}€</li>
						<li className="bg-orange-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow">
							{discount}%
						</li>
					</ul>
					<p className="text-slate-600 text-sm">
					  <s>{price}€</s>
					</p>
				</div>
				<Link
					className="flex items-center justify-center gap-4 bg-orange-400 py-2 px-2 text-white font-bold rounded-lg shadow mt-4 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200"
					href={`/makeups/${slug}`}
				>
					Quick shop
				</Link>
			</div>
		</article>
	)
}
