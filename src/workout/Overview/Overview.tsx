import { Box, Chip } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { useState } from "react";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import useStyles from "./OverviewStyles";
import { User } from "./types";
import { UserDetail } from "./UserDetail/UserDetail";
import { ClassNameMap } from "@material-ui/styles";

function getStatusHTML(
	classes: ClassNameMap<"workoutNumber" | "chip">,
	status: string | number
) {
	switch (status) {
		case 1:
		case 2:
		case 3:
			return <span className={classes.workoutNumber}>{status}</span>;
		case 4:
			return <DoneIcon />;
		case "joker":
			return <SkipNextIcon />;
		case "health":
			return <LocalHospitalIcon />;
		default:
			return <span className={classes.workoutNumber}>0</span>;
	}
}

export function Overview(props: { users: User[] }) {
	const classes = useStyles();
	const [detailedUser, setDetailedUser] = useState<User | null>(null);

	return (
		<Box display="flex" justifyContent="space-around" position="relative">
			{props.users.map((user) => {
				const statusHTML = getStatusHTML(classes, user.status);
				const border = detailedUser
					? detailedUser.id === user.id
						? "#eee"
						: "transparent"
					: "transparent";
				return (
					<Chip
						style={{ border: `2px solid ${border}` }}
						className={classes.chip}
						key={user.id}
						label={user.name}
						color="primary"
						deleteIcon={statusHTML}
						onDelete={() => setDetailedUser(user)}
						onClick={() => setDetailedUser(user)}
					/>
				);
			})}
			<UserDetail user={detailedUser} close={() => setDetailedUser(null)} />
		</Box>
	);
}
