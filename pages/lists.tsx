import { Alert } from "@mui/material";
import useSWR from "swr";

const API = `/api/entries`;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};
const fetcher = async (url: string) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`That's an error`);
  }

  interface dataType {
    id: string;
    title: string;
    details: string;
    category: string;
  }

  const data = await res.json();

  return data;
};

const lists = () => {
  const { data, error } = useSWR(API, fetcher);
  console.log(`Data: `, data);

  if (error) {
    return (
      <Alert>Loading Failed: {error.message}</Alert>
    );
  }

  if (!data) {
    return (
      <Alert>Loading...</Alert>
    );
  }

  return (
    <div>
      <h1>Lists</h1>
      {data.map((doc) => (
        <div key={doc.id}>
          <p>Title: {doc.title}</p>
        </div>
      ))}
    </div>
  );
};

export default lists;