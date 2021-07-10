import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { useStyles } from "./AppStyles";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useState } from "react";
import { Login } from "./login/Login";
import { Workout } from "./workout/Workout";

export function App() {
	const classes = useStyles();
	const [userId, setUserId] = useState<string | null>(null);
	const [confetti, setConfetti] = useState<object>({});
	const fireConfetti = () => {
		setConfetti({});
		if (window.navigator.vibrate) window.navigator.vibrate(300);
	};

	return (
		<>
			<CssBaseline />

			<Typography variant="h5" align="center" style={{ zIndex: 10 }}>
				Work Hard Play Hard
			</Typography>

			<main className={classes.main}>
				{userId ? (
					<Workout fireConfetti={fireConfetti} userId={userId} />
				) : (
					<Login setUserId={setUserId} />
				)}
			</main>

			<ReactCanvasConfetti
				particleCount={200}
				angle={90}
				spread={300}
				startVelocity={45}
				decay={0.8}
				ticks={200}
				className={classes.confetti}
				fire={confetti}
			/>
		</>
	);
}
