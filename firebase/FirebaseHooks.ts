import { collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import  { db }  from "@/firebase/Firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { noteState } from "@/stores/atoms/NoteState";
import Note from "@/stores/types/Note";

const NoteList = () => {
  const [notes, setNotes] = useRecoilState(noteState);

  const colRef = collection(db, "notes");
  const q = query(colRef, orderBy("createdAt", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      const notes = snapshot.docs.map((doc) => doc.data()) as Note[];
      setNotes(notes);
    });
  }, [setNotes]);

  return notes;
};

export default NoteList; 
