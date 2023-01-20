import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Products = ({ item }) => {
    console.log(item)

    const { brand, content, description, id, image } = item.attributes
  
    const imageProduit = image.data.attributes.url
   
  return (
      <article>
          <Image width={800} height={600} src={imageProduit} alt={`image produit ${description}`}></Image>
			<div>
              <h1>{brand}</h1>
              <p>{description}</p>
              <p>{content}</p>
              <Link href={`/cart${id}`}>Ajouter au panier</Link>
			</div>
		</article>
	)
}
