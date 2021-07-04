import { Overview } from "./Overview/Overview";
import { WorkoutButton } from "./WorkoutButton/WorkoutButton";
import { ExtraActions } from "./ExtraActions/ExtraActions";
import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { getCurrentDate, parseWorkouts } from "./helper";
import { DBUserList, User } from "./Overview/types";

export function Workout(props: { userId: string; fireConfetti: () => void }) {
	const [DBUsers, setDBUsers] = useState<DBUserList>({});
	const [users, setUsers] = useState<User[]>([]);
	const [currentDay, setCurrentDay] = useState<number>(
		getCurrentDate().getTime()
	);

	useEffect(() => {
		const nextDate = new Date(getCurrentDate().getTime() + 24 * 60 * 60 * 1000);
		const timeUntilNextDate = nextDate.getTime() - new Date().getTime();

		const timeoutId = setTimeout(() => {
			setCurrentDay(getCurrentDate().getTime() + 24 * 60 * 60 * 1000);
		}, timeUntilNextDate + 1000); //add 1s threshold before update

		return () => clearTimeout(timeoutId);
	}, [currentDay]);

	useEffect(() => {
		const db = getDatabase();
		const usersRef = ref(db, "users");
		const unsubscribe = onValue(usersRef, (snapshot) =>
			setDBUsers(snapshot.val())
		);
		return unsubscribe;
	}, []);

	useEffect(() => {
		const newUsers = [];
		for (const [id, user] of Object.entries(DBUsers)) {
			let status = user.workouts?.[currentDay] || 0;
			newUsers.push({
				id,
				name: user.name,
				status,
				workouts: user.workouts,
				...parseWorkouts(user.workouts),
			});
		}
		setUsers(newUsers);
	}, [DBUsers, currentDay]);

	const user: User | null = users.filter((user) => user.id === props.userId)[0];

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
