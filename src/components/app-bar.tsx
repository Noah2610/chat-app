import {
    createStyles,
    makeStyles,
    AppBar,
    Box,
    Toolbar,
} from "@material-ui/core";
import Heading from "./heading";
import Login from "./login";

const useStyles = makeStyles((_theme) =>
    createStyles({
        root: {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
        },
    }),
);

export default function PageAppBar() {
    const styles = useStyles();

    return (
        <AppBar className={styles.root} position="relative">
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                >
                    <Heading>Chat App</Heading>
                    <Login />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
