import { Box, Button } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { setCurrentWorkoutStatus } from "../helper";
import { User } from "../Overview/types";

export function ExtraActions(props: { user: User }) {
	return (
		<Box display="flex" justifyContent="space-around">
			<Button
				disabled={props.user.joker <= 0 || props.user.status === "joker"}
				onClick={() => setCurrentWorkoutStatus(props.user.id, "joker")}
				variant="contained"
				color="primary"
				endIcon={<SkipNextIcon />}
			>
				Joker ({props.user.joker})
			</Button>
			<Button
				disabled={props.user.status === "health"}
				onClick={() => setCurrentWorkoutStatus(props.user.id, "health")}
				variant="contained"
				color="primary"
				endIcon={<LocalHospitalIcon />}
			>
				Health
			</Button>
		</Box>
	);
}
