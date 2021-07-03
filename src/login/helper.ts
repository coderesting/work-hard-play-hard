import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const provider = new GoogleAuthProvider();

export async function login() {
	const auth = getAuth();
	const result = await signInWithPopup(auth, provider);
	const user = result.user;
	localStorage.setItem("uid", user.uid);
	const db = getDatabase();
	await set(ref(db, `users/${user.uid}/name`), user.displayName?.split(" ")[0]);
	return user;
}
