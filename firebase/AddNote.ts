import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";

const useAddNote = ( data ) => {
  const colRef = collection(db, "notes");

  addDoc(colRef, {
    title: data.title,
    details: data.details,
    category: data.category,
    createdAt: serverTimestamp()
  });

  return;
};

export default useAddNote;