import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	chip: {
		zIndex: 11,
		transition: "0.2s ease",
	},
	workoutNumber: {
		fontSize: 16,
		display: "flex",
		justifyContent: "center",
	},
}));

export default useStyles;
