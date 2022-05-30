import type { NextPage } from "next";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from "@/pages/create.module.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { useState } from "react";

const Create: NextPage = () => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	return (
		<Container>
			<Typography 
				variant="h6" 
				component="h2" 
				color="secondary"
				id={styles.heading}
			>
				Create New Note
			</Typography>

			<form
				noValidate
				autoComplete="off"
				onSubmit={e => {
					e.preventDefault();
					setTitleError(false);
					setDetailsError(false);

					if (title === "") {
						setTitleError(true);
					}
					if (details === "") {
						setDetailsError(true);
					} 
					if (title && details) {
						console.log(`title: ${title} details: ${details}`);
					}
				}}
			>
				<TextField
					label="Note Title"
					variant="outlined"
					required
					fullWidth
					margin="dense"
					error = {titleError}
					onChange={e => setTitle(e.target.value)}
				></TextField>
				
				<TextField
					label="Note Details"
					variant="outlined"
					required
					fullWidth
					margin="dense"
					multiline
					minRows={4}
					error={detailsError}
					onChange={e => setDetails(e.target.value)}
				></TextField>

				<Button 
					type="submit"
					color="primary"
					variant="contained"
					endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
					id={styles.button}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default Create;
