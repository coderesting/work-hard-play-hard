import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	userDetail: {
		display: "grid",
		gridTemplateRows: "auto auto",
		position: "absolute",
		top: -10,
		width: "100%",
		height: "50vh",
		minHeight: 250,
		padding: "60px 20px 5px 20px",
		zIndex: 10,
		transition: "0.4s ease",
	},
	backdrop: { zIndex: 9 },
}));

export default useStyles;
