import { collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import  { db }  from "@/firebase/Firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { noteState } from "@/stores/atoms/NoteState";
import Note from "@/stores/types/Note";

const NoteList = () => {
  const [notes, setNotes] = useRecoilState(noteState);
  let noteProto: Note[] = [];

  const colRef = collection(db, "notes");
  const q = query(colRef, orderBy("createdAt", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        noteProto.push({
          title: doc.data().title,
          details: doc.data().details,
          category: doc.data().category,
          id: doc.id,
          createdAt: doc.data().createdAt
        });
      });
      setNotes(noteProto);
      console.log(noteProto);
    });
  }, []);

  return notes;
};

export default NoteList; 
