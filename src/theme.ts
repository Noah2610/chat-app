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
    },
});
