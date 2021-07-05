import { getDatabase, ref, set } from "firebase/database";
import { Workouts } from "./Overview/types";

export function getCurrentDate() {
	const currentDay = new Date();
	if (currentDay.getHours() <= 6)
		currentDay.setTime(currentDay.getTime() - 24 * 60 * 60 * 1000); // subtract 1 day
	currentDay.setHours(6, 0, 0, 0);
	return currentDay;
}

export function setCurrentWorkoutStatus(id: string, value: string | number) {
	const db = getDatabase();
	set(ref(db, `users/${id}/workouts/${getCurrentDate().getTime()}`), value);
}

export function parseWorkouts(workouts: Workouts | null) {
	let joker = 0;
	let missed = 0;

	if (workouts) {
		const replayDate = new Date("2021-07-05T06:00:00");
		const endDate = getCurrentDate();
		endDate.setHours(6, 0, 0, 0);

		let usedRestDay = false;
		//replay
		while (replayDate.getTime() <= endDate.getTime()) {
			const currentDay = replayDate.getTime() === endDate.getTime();
			const status = workouts[replayDate.getTime()];

			// if monday
			if (replayDate.getDay() === 1) {
				if (joker <= 5) joker++;
				usedRestDay = false;
			}
			if (status === "joker") joker--;

			if (!status || (status >= 0 && status < 4)) {
				if (usedRestDay && !currentDay) missed++;
				else usedRestDay = true;
			}
			replayDate.setTime(replayDate.getTime() + 24 * 60 * 60 * 1000); // add 24h
		}
	}
	return {
		joker,
		missed,
	};
}
