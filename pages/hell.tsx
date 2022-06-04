import useSWR, { SWRConfig } from "swr"

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const article = await fetcher(URL);
  return {
    props: {
      fallback: {
        [URL]: article
      }
    }
  }
}
const URL = `http://localhost:3000/api/entry/AjRk3yZfvzPtomyqUz7n`;
const fetcher = async (url: string) => {
  const res = await fetch(url);
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

function Article() {
  // `data` will always be available as it's in `fallback`.
  const { data, error } = useSWR(URL);

  if (error) return <div>An error occured</div>
  if (!data) return <div>Loading...</div>

  return <h1>Data: {data.title}</h1>
}

export default function Page({ fallback }) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Article />
    </SWRConfig>
  )
}