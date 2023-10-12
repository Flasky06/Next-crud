export default function addTopic() {
	return (
		<form className="flex flex-col gap-3">
			<input
				type="text"
				placeholder="Topic Title"
				className="border border-slate-500"
			/>
			<input
				type="text"
				placeholder="Topic Description"
				className="border border-slate-500 px-8 py-2"
			/>
			<button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
				Add Topic
			</button>
		</form>
	);
}