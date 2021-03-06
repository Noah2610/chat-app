import { useState } from "react";
import { Box, TextField, FormControl } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatMessage from "./chat-message";
import { auth } from "../firebase";
import { useMessages, getMessagesCollection } from "../firebase/api";

export default function ChatRoom() {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");

    const messagesCollection = getMessagesCollection();
    const { messages, isLoading, error } = useMessages(
        messagesCollection,
        (query) => query.limit(10),
    );

    if (!user) {
        return null;
    }

    const sendMessage = async () => {
        setMessage("");
        await messagesCollection.add({
            content: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            photoURL: user.photoURL,
        });
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gridGap="16px"
        >
            {!!messages && (
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gridGap="16px"
                >
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                </Box>
            )}

            <Box>
                <form
                    action="#"
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}
                >
                    <FormControl>
                        <TextField
                            value={message}
                            label="Message"
                            variant="filled"
                            onChange={(e) => setMessage(e.currentTarget.value)}
                        ></TextField>
                    </FormControl>
                </form>
            </Box>
        </Box>
    );
}
