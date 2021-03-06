import { Box } from "@material-ui/core";
import AppBar from "./app-bar";
import ChatMenu from "./chat-menu";
import ChatRoom from "./chat-room";

export default function App() {
    return (
        <>
            <Box position="relative">
                <AppBar />
                <ChatMenu />
                <ChatRoom />
            </Box>
        </>
    );
}
