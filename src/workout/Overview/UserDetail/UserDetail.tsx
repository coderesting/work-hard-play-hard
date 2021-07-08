import {
	Backdrop,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";
import { User } from "../types";
import useStyles from "./UserDetailStyles";

export function UserDetail(props: { user: User | null; close: any }) {
	const classes = useStyles();

	return (
		<>
			<TableContainer
				component={Paper}
				className={classes.userDetail}
				style={{
					transform: `translateY(${props.user ? 0 : -100}%)`,
					opacity: props.user ? 1 : 0,
				}}
			>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>Available joker</TableCell>
							<TableCell align="right">{props.user?.joker}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Missed days</TableCell>
							<TableCell align="right">{props.user?.missed}€</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Used rest day</TableCell>
							<TableCell align="right">
								{props.user?.usedRestDay ? "Yes" : "No"}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Backdrop
				classes={{ root: classes.backdrop }}
				open={props.user !== null}
				onClick={props.close}
			></Backdrop>
		</>
	);
}
