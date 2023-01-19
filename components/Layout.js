import Head from "next/head";


export default function Layout({ children, page }) {
    
    return (
        <div>
            <Head>
                <title>Cosmetics Ecommerce - {page}</title>
                <meta name="description" content="Ecommerci site to cosmetics website" />
            </Head>
            {children}
        </div>
    )
}