import { User } from "./types";
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";
import { getStatusHTML } from "../helper";

export function UserTimeline(props: { user: User | null }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					{props.user?.timeline.map((day) => (
						<TableRow key={day.date}>
							<TableCell>{day.date}</TableCell>
							<TableCell padding="none" align="right">
								<Box display="flex" alignItems="end" justifyContent="center">
									{getStatusHTML(day.status || 0)}
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
