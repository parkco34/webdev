import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
	link: {
		curso: 'pointer',
	},
}));

const LoginBox = ({ handleClose }) => {
	const classes = useStyles();

	// declare a state variable for each input
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(firstName, lastName, email, password);

		handleClose();
	};

	return (
		<form className={classes.root}>
			<TextField
				label="First Name"
				variant="filled"
				value={firstName}
				required
				onChange={e=>setFirstName(e.target.value)}
			/>

			<TextField
				label="Last Name"
				variant="filled"
				value={lastName}
				required
				onChange={e=>setLastName(e.target.value)}
			/>

			<TextField
				label="Email"
				variant="filled"
				value={email}
				required
				onChange={e=>setEmail(e.target.value)}
			/>

			<TextField
				label="Password"
				type="password"
				variant="filled"
				value={password}
				required
				onChange={e=>setPassword(e.target.value)}
			/>

			<div>
				<Button variant="contained" onClick={handleClose}>Cancel</Button>
				<Button type="submit" variant="contained" style={{backgroundColor: '#2d6bcf', color: 'white'}} >
					Signup
				</Button>
			</div>
		</form>
	);
}

export default LoginBox;

