import { BASE_URL } from "@/stores/types/constant";
import axios from "axios";
import { useEffect, useRef } from "react";

export const getStaticProps = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const {data: res} = await axios.get(`${BASE_URL}/api/entries`, config);

  return {
    props: {
      notes: res
    }
  };
};

const notes = (props) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h1>This page rendered {renderCount.current} times</h1>
      {props.notes.length ? props.notes.map((doc) => (
        <div key={doc.id}>
          <p>{doc.category}</p>
        </div>
      )) : 
        <div>Error Occured</div>
      }
    </div>
  );
};

export default notes;