import { useState } from "react";

interface TodoItem {
	id: number;
	text: string;
}

function ToDo() {
	const [items, setItems] = useState<TodoItem[]>([]);
	const [nextId, setNextId] = useState(1);

	const addItem = (item: string) => {
		setItems([...items, { id: nextId, text: item }]);
		setNextId(nextId + 1);
	};

	return (
		<div className="bg-gray-800 w-96 h-124 rounded-lg p-4 flex flex-col gap-4 border-1 border-gray-700 shadow-lg/20">
			<h1 className="text-center text-gray-50 text-2xl font-bold pb-4 border-b-1 border-b-gray-700">
				To-Do List
			</h1>
			<div className="flex flex-row gap-2 items-center">
				<input
					type="text"
					name="add-item-field"
					id="add-item-field"
					className="flex-1 p-1 text-gray-50 rounded-md border border-gray-600 focus:outline focus:outline-gray-100"
				/>
				<input
					type="button"
					value="Add Task"
					className="p-1 rounded-md w-1/4 transition-all duration-50 bg-sky-400 text-white hover:bg-sky-500 active:scale-95 active:bg-sky-600"
					onClick={() => {
						const inputField = document.getElementById(
							"add-item-field"
						) as HTMLInputElement;
						const item = inputField.value.trim();

						if (!item) return;

						addItem(item);
						inputField.value = "";
					}}
				/>
			</div>
			<ul className="flex flex-col gap-1.5 overflow-y-scroll pr-2.5">
				{items.map((item) => (
					<div key={item.id} className="flex flex-row items-start gap-2">
						<li
							key={item.id}
							className="flex items-baseline rounded-md min-w-0 hover:bg-white/5 p-1.5 flex-1"
						>
							<input
								type="checkbox"
								name={item.id.toString()}
								id={item.id.toString()}
								className="mr-2 shrink-0"
							/>
							<label
								htmlFor={item.id.toString()}
								className="text-gray-50 break-words min-w-0 w-full"
							>
								{item.text}
							</label>
						</li>
						<button
							className=""
							onClick={() => {
								setItems(items.filter((_, i) => i !== item.id));
							}}
						>
							<img
								src="/src/assets/x.svg"
								alt="Remove task"
								className="rounded-md p-1.5 hover:bg-white/5"
							/>
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}

export default ToDo;
