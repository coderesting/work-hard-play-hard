import { Backdrop, Paper } from "@material-ui/core";
import Dots from "material-ui-dots";
import { User } from "../types";
import { UserStats } from "../UserStats";
import { UserTimeline } from "../UserTimeline";
import useStyles from "./UserDetailStyles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

export function UserDetail(props: { user: User | null; close: any }) {
	const classes = useStyles();
	const [idx, setIdx] = useState<number>(0);

	return (
		<>
			<Paper
				style={{
					transform: `translateY(${props.user ? 0 : -100}%)`,
					opacity: props.user ? 1 : 0,
				}}
				className={classes.userDetail}
			>
				<SwipeableViews
					containerStyle={{ height: "100%" }}
					onChangeIndex={(newIdx) => setIdx(newIdx)}
					index={idx}
					enableMouseEvents={true}
				>
					<UserStats user={props.user} />
					<UserTimeline user={props.user} />
				</SwipeableViews>
				<Dots
					style={{ margin: "auto" }}
					index={idx}
					count={2}
					onDotClick={(newIdx: number) => setIdx(newIdx)}
				></Dots>
			</Paper>

			<Backdrop
				classes={{ root: classes.backdrop }}
				open={props.user !== null}
				onClick={props.close}
			></Backdrop>
		</>
	);
}
