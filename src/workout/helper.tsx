import { getDatabase, ref, set } from 'firebase/database'
import { Workouts } from './Overview/types'
import DoneIcon from '@material-ui/icons/Done'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'

export function getCurrentDate() {
	const currentDay = new Date()
	if (currentDay.getHours() < 6)
		currentDay.setTime(currentDay.getTime() - 24 * 60 * 60 * 1000) // subtract 1 day
	currentDay.setHours(4 - currentDay.getTimezoneOffset() / 60, 0, 0, 0) // Timezone magic
	return new Date('2021-09-30T06:00:00+02:00')
}

export function setCurrentWorkoutStatus(id: string, value: string | number) {
	const db = getDatabase()
	set(ref(db, `users/${id}/workouts/${getCurrentDate().getTime()}`), value)
}

export function parseWorkouts(workouts: Workouts | null) {
	let joker = 0
	let missed = 0
	let usedRestDay = false
	let timeline = []

	if (workouts) {
		const replayDate = new Date('2021-07-12T06:00:00+02:00')
		const endDate = getCurrentDate()

		//replay
		while (replayDate.getTime() <= endDate.getTime()) {
			const currentDay = replayDate.getTime() === endDate.getTime()
			const status = workouts[replayDate.getTime()]

			// if monday
			if (replayDate.getDay() === 1) {
				if (joker <= 5) joker++
				usedRestDay = false
			}
			if (status === 'joker') joker--

			if ((!status || (status >= 0 && status < 4)) && !currentDay) {
				if (usedRestDay) missed++
				else usedRestDay = true
			}

			timeline.push({
				date: replayDate.toLocaleDateString(),
				status,
			})
			replayDate.setTime(replayDate.getTime() + 24 * 60 * 60 * 1000) // add 24h
		}
	}
	return {
		joker,
		missed,
		usedRestDay,
		timeline,
	}
}

export function getStatusHTML(
	status: string | number,
	workoutNumberClass?: string
) {
	switch (status) {
		case 1:
		case 2:
		case 3:
			return <span className={workoutNumberClass}>{status}</span>
		case 4:
			return <DoneIcon />
		case 'joker':
			return <SkipNextIcon />
		case 'health':
			return <LocalHospitalIcon />
		default:
			return <span className={workoutNumberClass}>0</span>
	}
}
