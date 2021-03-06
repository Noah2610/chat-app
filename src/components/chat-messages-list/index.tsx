import { Box, List } from "@material-ui/core";
import ListItem from "./list-item";
import { Message, WithIdAndRef } from "../../firebase/types";

export type ChatMessagesListProps = {
    messages: WithIdAndRef<Message>[];
};

export default function ChatMessagesList({ messages }: ChatMessagesListProps) {
    return (
        <List>
            {messages.map((message) => (
                <ListItem key={message.id} message={message} />
            ))}
        </List>
    );
}
