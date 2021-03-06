import { useState } from "react";
import { Box, TextField, Typography, FormControl } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./chat-message";
import { auth, firestore } from "../firebase";

export default function ChatRoom() {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");

    const messagesRef = firestore.collection("messages");
    const messagesQuery = messagesRef.orderBy("createdAt", "desc").limit(25);

    const [messages] = useCollectionData(messagesQuery, { idField: "id" });

    if (!user) {
        return null;
    }

    const sendMessage = async () => {
        setMessage("");

        await messagesRef.add({
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
