import type { NextPage } from "next";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import styles from "@/pages/create.module.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { useRecoilValue } from "recoil";
import { noteState } from "@/stores/atoms/NoteState";
import useAddNote from "@/firebase/AddNote";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/Firebase";

const Create: NextPage = () => {
	const defaultState = {
		title: "",
		details: "",
		titleError: false,
		detailsError: false,
		category: "None"
	};

	const [state, setState] = useState(defaultState);
	const router = useRouter();

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
				onSubmit={(e) => {
					e.preventDefault();
					setState({
						...state,
						titleError: false,
						detailsError: true
					});

					if (state.title === "") {
						setState({
							...state,
							titleError: true
						});
					}
					if (state.details === "") {
						setState({
							...state,
							detailsError: true
						});
					} 
					if (state.title && state.details) {
						const data = {
							title: state.title,
							details: state.details,
							category: state.category
						};
						useAddNote(data);
						router.push("/lists");
					}
				}}
			>
				<TextField
					label="Note Title"
					variant="outlined"
					required
					fullWidth
					margin="dense"
					error = {state.titleError}
					value={state.title}
					onChange={(e) => {
						setState({
							...state,
							title: e.target.value
						});
					}}
				></TextField>
				
				<TextField
					label="Note Details"
					variant="outlined"
					required
					fullWidth
					margin="dense"
					multiline
					minRows={4}
					error={state.detailsError}
					value={state.details}
					onChange={(e) => {
						setState({
							...state,
							details: e.target.value
						});
					}}
				></TextField>

				<FormControl id={styles.radio_control}>
					<FormLabel id={styles.category}>
						Note Category
					</FormLabel>
					<RadioGroup
						value={state.category}
						onChange={(e) => {
							setState({
								...state,
								category: e.target.value
							});
						}}
					>
						<FormControlLabel
							control={<Radio></Radio>}
							label="Geralt"
							value="Geralt"
						></FormControlLabel>

						<FormControlLabel
							control={<Radio></Radio>}
							label="Triss"
							value="Triss"
						></FormControlLabel>

						<FormControlLabel
							control={<Radio></Radio>}
							label="None"
							value="None"
						></FormControlLabel>					
					</RadioGroup>
				</FormControl>

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
