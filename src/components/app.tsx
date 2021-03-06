import { Box } from "@material-ui/core";
import Heading from "./heading";
import Login from "./login";

export default function App() {
    return (
        <>
            <Box position="relative">
                <Login />
                <Heading>Chat App</Heading>
                Hello App!
            </Box>
        </>
    );
}
