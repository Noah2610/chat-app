import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
            contrastText: "#cccccc",
        },
        text: {
            primary: "#dddddd",
            secondary: "#aaaaaa",
        },
        background: {
            default: "#282c34",
            paper: "#282c34",
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
