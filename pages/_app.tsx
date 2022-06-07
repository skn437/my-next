import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from "@mui/material/colors";
import Layout from "@/components/Layout";

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
				<Layout>
					<Component {...pageProps}></Component>
				</Layout>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default MyApp;
