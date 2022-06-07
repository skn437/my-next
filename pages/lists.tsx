import { Alert, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useSWR from "swr";
import NoteLists from "@/components/NoteLists";
import { useEffect, useRef } from "react";
import axios from "axios";

const API = `/api/entries`;
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
const fetcher = async (url: string) => {
  const { data: res } = await axios.get(url, config);

  /*if (!res) {
    throw new Error(`That's an error`);
  }*/

  //const data = await res.json();

  return res;
};

const lists = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

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
    <Container>
      <h1>Lists</h1>
      <h1>This page rendered {renderCount.current} times</h1>
      <Grid 
        container
        spacing={3}
      >
        {data.map((note) => (
          <Grid 
            key={note.id}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <NoteLists note={note}></NoteLists>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default lists;