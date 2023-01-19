import Head from "next/head";


export default function Layout({ children}) {
    
    return (
        <div>
            <Head>
                <title>Cosmetics Ecommerce </title>
                <meta name="description" content="Ecommerci site to cosmetics website" />
            </Head>
            {children}
        </div>
    )
}