import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";
import { User } from "./types";

export function UserStats(props: { user: User | null }) {
	return (
		<>
			<TableContainer component={Paper}>
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
		</>
	);
}
