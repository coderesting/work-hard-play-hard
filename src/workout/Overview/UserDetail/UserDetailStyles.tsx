import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	userDetail: {
		padding: 20,
		paddingTop: 60,
		position: "absolute",
		width: "100%",
		top: -10,
		zIndex: 10,
		transition: "0.3s ease",
	},
	backdrop: { zIndex: 9 },
}));

export default useStyles;
