import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from "@mui/material/colors";

const darkTheme = createTheme({
	palette: {
		primary: indigo
	},
	typography: {
		fontFamily: "Quicksand"
	}
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<RecoilRoot>
					<Component {...pageProps}></Component>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default MyApp;
