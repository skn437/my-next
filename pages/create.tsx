import type { NextPage } from "next";
import { Typography, Button, Container, } from "@mui/material";
import styles from "@/pages/create.module.scss";

const Create: NextPage = () => {
	return (
		<Container>
			<Typography 
				variant="h6" 
				component="h2" 
				color="secondary"
				gutterBottom
			>
				Create New Note
			</Typography>

			<Button 
			type="submit"
			color="primary"
			variant="contained"
			onClick={() => console.log(`You clicked`)}
			>
				Submit
			</Button>
		</Container>
	);
};

export default Create;
