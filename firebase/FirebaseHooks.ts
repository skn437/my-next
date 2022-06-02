import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import  { db }  from "@/firebase/Firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { noteState } from "@/stores/atoms/NoteState";
import Note from "@/stores/types/Note";

const NoteList = () => {
  const [notes, setNotes] = useRecoilState(noteState);
  const hell = useRecoilValue(noteState);
  console.log(`Hell is: `, hell);
  const colRef = collection(db, "notes");
  const q = query(colRef, orderBy("createdAt", "desc"));

  useEffect(() => {
    let noteProto = [];

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach(doc => {
        noteProto.push({...doc.data(), id: doc.id});
      });
      setNotes(noteProto);
      console.log(noteProto);
    });
  }, [setNotes]);

  return notes;
};

export default NoteList; 
