import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
	apiKey: "AIzaSyB5dTlBpvuIZXuIU5VV7NV4ODvE0V7kAq0",
	authDomain: "workhardplayhard-88b4f.firebaseapp.com",
	projectId: "workhardplayhard-88b4f",
	storageBucket: "workhardplayhard-88b4f.appspot.com",
	messagingSenderId: "942006751453",
	appId: "1:942006751453:web:f7e9ec10758a9ba0b60b34",
	databaseURL:
		"https://workhardplayhard-88b4f-default-rtdb.europe-west1.firebasedatabase.app",
};
initializeApp(firebaseConfig);

const theme = createMuiTheme({
	overrides: {
		MuiChip: {
			root: {
				paddingRight: 5,
			},
			deleteIconColorPrimary: {
				color: "white",
			},
		},
		MuiTableCell: {
			root: {
				borderBottom: "1px solid #eee",
			},
		},
	},
	palette: {
		type: "dark",

		background: {
			paper: "#34444c",
			default: "#263238",
		},

		primary: {
			main: "#1976D2",
			dark: "#1976D2",
			light: "#1976D2",
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js");
}
