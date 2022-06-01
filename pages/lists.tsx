import List from "@/components/List";
import NoteList from "@/firebase/FirebaseHooks";
import { NextPage } from "next";

const Lists: NextPage = () => {
	const notes = NoteList();

	return (
		<div>
			<List notes={notes}></List>
		</div>
	);
};

export default Lists;
