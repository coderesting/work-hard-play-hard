import { useStyles } from "./WorkoutButtonStyles";
import { setCurrentWorkoutStatus } from "../helper";
import { User } from "../Overview/types";

export function WorkoutButton(props: { user: User; fireConfetti: any }) {
	const classes = useStyles();

	let workouts = 0;
	if (typeof props.user.status === "number") workouts = props.user.status;

	return (
		<>
			<button
				disabled={workouts >= 4}
				onClick={() => {
					setCurrentWorkoutStatus(props.user.id, workouts + 1);
					props.fireConfetti();
				}}
				className={classes.workoutButton}
			>
				💪
				<span style={{ fontSize: 15 }}>+1 Set</span>
			</button>
		</>
	);
}
