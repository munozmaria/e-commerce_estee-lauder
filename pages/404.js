import Link from "next/link";
import Layout from "../components/Layout";

export default function page404(props) {
	

	return (
		<>
			<Layout>
				<div className="h-screen flex flex-col justify-center gap-6 place-items-center  ">
					<h1 className="font-bold text-2xl">Not working!</h1>
					<Link
						className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
						href="/"
					>
						Home
					</Link>
				</div>
			</Layout>
		</>
	)
}
