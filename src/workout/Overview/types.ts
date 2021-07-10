export interface DBUserList {
	[key: string]: DBUser;
}

export interface DBUser {
	name: string;
	workouts: Workouts;
}

export interface Workouts {
	[key: string]: number | string;
}

export interface UserList {
	[key: string]: User;
}

export interface User {
	id: string;
	name: string;
	workouts: Workouts;
	status: string | number;
	joker: number;
	missed: number;
	usedRestDay: boolean;
	timeline: { date: string; status: string | number | null }[];
}
