import { Box } from "@material-ui/core";
import Heading from "./heading";
import Login from "./login";
import ChatRoom from "./chat-room";

export default function App() {
    return (
        <>
            <Box position="relative">
                <Login />
                <Heading>Chat App</Heading>
                <ChatRoom />
            </Box>
        </>
    );
}
