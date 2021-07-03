import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	main: {
		width: "100%",
		height: "100%",
		maxWidth: 400,
		margin: "auto",
		marginTop: 20,
	},
	confetti: {
		position: "fixed",
		pointerEvents: "none",
		bottom: 0,
		width: "100%",
		height: "100%",
		zIndex: 10,
	},
}));
