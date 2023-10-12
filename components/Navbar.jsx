import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center bg-slate-800 px-8 py-3  mb-3">
			<Link href={"/"} className="text-white font-bold">
				GtCoding
			</Link>{" "}
			<Link href={"/addTopic"} className="  p-2 bg-white rounded-sm">
				Add Topic
			</Link>
		</nav>
	);
}
