import { Chip } from "@material-ui/core";

import useStyles from "./UserChipStyles";
import { User } from "../types";
import { getStatusHTML } from "../../helper";

export function UserChip(props: {
	user: User;
	focused: boolean;
	onClick: any;
}) {
	const classes = useStyles();

	const statusHTML = getStatusHTML(props.user.status, classes.workoutNumber);
	const border = props.focused ? "#eee" : "transparent";

	return (
		<Chip
			style={{ border: `2px solid ${border}` }}
			className={classes.chip}
			key={props.user.id}
			label={props.user.name}
			color="primary"
			deleteIcon={statusHTML}
			onDelete={props.onClick}
			onClick={props.onClick}
		/>
	);
}
