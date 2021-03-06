import { AppBar, Box, Toolbar } from "@material-ui/core";
import Heading from "./heading";
import Login from "./login";

export default function PageAppBar() {
    return (
        <AppBar position="relative">
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
