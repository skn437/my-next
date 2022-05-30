import { atom, selector } from "recoil";

const countAtom = atom({
	key: "count-atom",
	default: 15
});

const fontSizeSelector = selector({
	key: "font-size-selector",
	get: ({ get }) => {
		const count = get(countAtom);
		const fontSize = count * 2;
		return fontSize;
	}
});

export { countAtom, fontSizeSelector };
