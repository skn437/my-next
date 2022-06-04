import { countAtom, fontSizeSelector } from "@/services/app/CountAtom";
import type { NextPage } from "next";
import Image from "next/image";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

const Home: NextPage = () => {
	const [count, setCount] = useRecoilState(countAtom);
	const resetCount = useResetRecoilState(countAtom);
	const fontSize = useRecoilValue(fontSizeSelector);

	return (
		<>
		<div>
			<h1 style={{ fontSize: fontSize }}>Recoil Tutorial</h1>
			<h2>The count value is: {count}</h2>
			<h3>The font size of witcher is: {fontSize}</h3>
			<Image
				src="/witcher.ico"
				alt="witcher"
				width={110}
				height={100}
			></Image>
			<button onClick={() => setCount(count + 1)}>Increase Count</button>
			<button onClick={resetCount}>reset count</button>
		</div>
		</>
	);
};

export default Home;

