import { atom } from "recoil";
import { Note } from "@/stores/types/Note";

const note = [{
	title: "",
	details: "",
	category: "None",
	id: "69",
	createdAt: Date.now()
}]

export const noteState = atom<Note[]>({
  key: "store-atom",
  default: note as Note[]
});

