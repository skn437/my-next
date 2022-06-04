import { Alert } from "@mui/material";
import useSWR from "swr";

const url = `/api/entry/AjRk3yZfvzPtomyqUz7n`;
const options = { 
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};
const fetcher = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw Error(`That's an error`);
  }
  const data: {
    id: string;
    details: string;
    category: string;
    title: string;
  } = await res.json();

  return data;
};

const hell = () => {
  const { data, error} = useSWR(url, fetcher);
  console.log(`Data: `, data);

  if (error) {
    return (
      <Alert>Loading failed: {error.message}</Alert>
    );    
  }

  if (!data) {
    return (
      <Alert>Loading...</Alert>
    );
  }

  return (
    <div>
      <h1>Title: {data.title}</h1>
      <p>Details: {data.details}</p>
      <p>Category: {data.category}</p>
    </div>
  );
};

export default hell;