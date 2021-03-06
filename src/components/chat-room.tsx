import { Box, CircularProgress, Paper } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatMessagesList from "./chat-messages-list";
import ChatInput from "./chat-input";
import Centered from "./centered";
import { auth } from "../firebase";
import { Timestamp } from "../firebase/types";
import { useMessages, getMessagesCollection } from "../firebase/api";

export default function ChatRoom() {
    const [user, isLoadingUser] = useAuthState(auth);

    const messagesCollection = getMessagesCollection();
    const {
        messages,
        isLoading: isLoadingMessages,
        error: messagesError,
    } = useMessages(messagesCollection, (query) => query.limit(10));

    const isLoading = isLoadingUser || isLoadingMessages;

    if (!user) {
        return null;
    }

    const sendMessage = async (message: string) => {
        await messagesCollection.add({
            content: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp() as Timestamp,
            uid: user.uid,
            photoURL: user.photoURL,
        });
    };

    return isLoading ? (
        <Centered>
            <CircularProgress />
        </Centered>
    ) : (
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
