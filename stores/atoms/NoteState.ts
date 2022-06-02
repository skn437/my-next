import { atom } from "recoil";
import Note from "@/stores/types/Note";

export const noteState = atom({
  key: "store-atom",
  default: []
});

