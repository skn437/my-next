import { noteState } from "@/stores/atoms/NoteState";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

const config = {
  method: "get",
  url: `/api/entries`,
  headers: {
    "Content-Type": "application/json"
  }
};

const notes = () => {
  const [notes, setNotes] = useRecoilState(noteState);
  const fetcher = async () => {
    const {data: res} = await axios(config);
    setNotes(res);
  };
  useEffect(() => {
    fetcher();
  }, []);

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(notes);
  });

  return (
    <div>
      <h1>This page rendered {renderCount.current} times</h1>
      {notes.map((doc) => (
        <div key={doc.id}>
          <p>{doc.category}</p>
        </div>
      ))}
    </div>
  );
};

export default notes;