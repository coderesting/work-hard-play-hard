import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, Button, Snackbar, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "./helper";
type StateSetter = Dispatch<SetStateAction<string | null>>;

export function Login(props: { setUserId: StateSetter }) {
	const [loginFailed, setLoginFailed] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const handleClick = () => {
		login()
			.then((user) => props.setUserId(user.uid))
			.catch(() => setLoginFailed(true));
	};

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			user ? props.setUserId(user.uid) : setLoading(false);
		});
		return unsubscribe;
	}, []);
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
		>
			{loading ? (
				<CircularProgress />
			) : (
				<Button variant="contained" onClick={handleClick}>
					Login
				</Button>
			)}

			<Snackbar
				open={loginFailed}
				autoHideDuration={6000}
				onClose={() => setLoginFailed(false)}
			>
				<Alert onClose={() => setLoginFailed(false)} severity="error">
					Login failed
				</Alert>
			</Snackbar>
		</Box>
	);
}
