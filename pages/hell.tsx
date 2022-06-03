import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

// ...
const { data, error } = useSWR('/api/user', fetcher)

/*const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};*/

function Profile() {
  const { data } = useSWR('/api/user', fetcher, { suspense: true });
  return <div>Hello, {data.name}!</div>;
}

export default function Hell() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}