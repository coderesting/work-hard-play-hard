import { Box } from "@material-ui/core";
import { useState } from "react";
import { User } from "./types";
import { UserDetail } from "./UserDetail/UserDetail";
import { UserChip } from "./UserChip/UserChip";

export function Overview(props: { users: User[] }) {
	const [detailedUser, setDetailedUser] = useState<User | null>(null);

	return (
		<Box display="flex" justifyContent="space-around" position="relative">
			{props.users.map((user) => {
				return (
					<UserChip
						key={user.id}
						user={user}
						focused={detailedUser?.id === user.id}
						onClick={() => setDetailedUser(user)}
					/>
				);
			})}
			<UserDetail user={detailedUser} close={() => setDetailedUser(null)} />
		</Box>
	);
}
