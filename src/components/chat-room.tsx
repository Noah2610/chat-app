import { Box, Paper } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatMessagesList from "./chat-messages-list";
import ChatInput from "./chat-input";
import { auth } from "../firebase";
import { useMessages, getMessagesCollection } from "../firebase/api";

export default function ChatRoom() {
    const [user] = useAuthState(auth);

    const messagesCollection = getMessagesCollection();
    const { messages, isLoading, error } = useMessages(
        messagesCollection,
        (query) => query.limit(10),
    );

    if (!user) {
        return null;
    }

    const sendMessage = async (message: string) => {
        await messagesCollection.add({
            content: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            photoURL: user.photoURL,
        });
    };

    return (
        <Paper elevation={8}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                gridGap="16px"
                padding={4}
            >
                <ChatMessagesList messages={messages} />
                <ChatInput sendMessage={sendMessage} />
            </Box>
        </Paper>
    );
}
