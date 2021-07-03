import { Overview } from "./Overview/Overview";
import { WorkoutButton } from "./WorkoutButton/WorkoutButton";
import { ExtraActions } from "./ExtraActions/ExtraActions";
import { Box, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { getCurrentDate, parseWorkouts } from "./helper";
import { DBUserList, User } from "./Overview/types";

export function Workout(props: { userId: string; fireConfetti: () => void }) {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const db = getDatabase();
		const usersRef = ref(db, "users");
		const unsubscribe = onValue(usersRef, parseUsers);
		return unsubscribe;
	}, []);

	const parseUsers = (snapshot: DataSnapshot) => {
		const data: DBUserList = snapshot.val();
		const newUsers = [];
		for (const [id, user] of Object.entries(data)) {
			let status = user.workouts?.[getCurrentDate().getTime()];
			newUsers.push({
				id,
				name: user.name,
				status,
				workouts: user.workouts,
				...parseWorkouts(user.workouts),
			});
		}
		setUsers(newUsers);
	};

	const user: User | null = users[0];

	return (
		<Box
			height="100%"
			display="flex"
			justifyContent="space-between"
			flexDirection="column"
		>
			{user ? (
				<>
					<Overview users={users} />
					<WorkoutButton user={user} fireConfetti={props.fireConfetti} />
					<ExtraActions user={user} />
				</>
			) : null}
		</Box>
	);
}
