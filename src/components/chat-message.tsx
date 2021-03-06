import { Avatar, Box, Typography } from "@material-ui/core";
import { Message } from "../firebase/types";

export type ChatMessageProps = {
    message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gridGap={8}
        >
            {!!message.photoURL && <Avatar src={message.photoURL} />}
            <Typography>{message.content}</Typography>
        </Box>
    );
}
