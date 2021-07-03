import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles((theme) => ({
	workoutButton: {
		border: `solid ${theme.palette.primary.main} 10px`,
		borderRadius: 200,
		padding: 60,
		fontSize: 60,
		width: 200,
		height: 200,
		cursor: "pointer",
		margin: "auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		color: theme.palette.text.primary,
		backgroundColor: `${fade(theme.palette.primary.main, 0.4)}`,
		position: "relative",
		animation: `$breathe 3s ${theme.transitions.easing.easeInOut} infinite`,
		zIndex: 1,
		userSelect: "none",
		"&:disabled": {
			opacity: 0.5,
			animation: "none",
			pointerEvents: "none",
		},
		"&:disabled&::after": {
			animation: "none",
		},
		"&::after": {
			content: '""',
			display: "block",
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: 200,
			background: `${fade(theme.palette.primary.main, 0.5)}`,
			animation: `$scale 3s ${theme.transitions.easing.easeInOut} infinite`,
			zIndex: -1,
		},
	},
	"@keyframes breathe": {
		"0%": {
			transform: "scale(1)",
		},
		"50%": {
			transform: "scale(1.1)",
		},
		"100%": {
			transform: "scale(1)",
		},
	},
	"@keyframes scale": {
		"0%": {
			opacity: 0,
			transform: "scale(1)",
		},
		"20%": {
			opacity: 1,
		},

		"50%": {
			transform: "scale(1.3)",
			opacity: 0,
		},

		"100%": {
			transform: "scale(1.4)",
			opacity: 0,
		},
	},
}));
