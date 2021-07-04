import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	workoutNumber: {
		fontSize: 16,
		display: "flex",
		justifyContent: "center",
	},
	chip: {
		zIndex: 11,
		transition: "0.2s ease",
	},
}));

export default useStyles;
