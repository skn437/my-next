import List from "@/components/List";
import { notes } from "@/firebase/FirebaseHooks";
import { NextPage } from "next";

const Lists: NextPage = () => {
	return (
		<div>
			<List notes={notes}></List>
		</div>
	);
};

export default Lists;
