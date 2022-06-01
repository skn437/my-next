import { atom } from "recoil";
import Note from "@/stores/types/Note";

export const noteState = atom<Note[]>({
  key: "store-atom",
  default: [] as Note[]
});

