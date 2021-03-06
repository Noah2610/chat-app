import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default createMuiTheme({
    palette: {
        primary: {
            main: "#601ea8",
            light: "#934edb",
            dark: "#2a0078",
            contrastText: "#cccccc",
        },
        secondary: {
            main: "#5c9123",
            light: "#8dc253",
            dark: "#2b6300",
            contrastText: "#ffffff",
        },
        text: {
            primary: "#ffffff",
            secondary: "#cccccc",
        },
        background: {
            default: "#282c34",
            paper: "#353942",
        },
    },
    typography: {
        fontFamily: "Roboto",

        body1: {
            fontSize: "18px",
        },

        h1: {
            fontSize: "64px",
            letterSpacing: "6px",
            wordSpacing: "12px",
            marginBottom: "16px",
            textShadow: "3px 3px 6px #000000",
        },
        h2: {
            fontSize: "48px",
        },
        h3: {
            fontSize: "32px",
        },
        h4: {
            fontSize: "24px",
        },
        h5: {
            fontSize: "20px",
        },
        h6: {
            fontSize: "18px",
        },
    },
});
