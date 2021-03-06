import { createStyles, makeStyles, Box } from "@material-ui/core";
import ListItem from "./list-item";
import { Message, WithIdAndRef } from "../../firebase/types";

export type ChatMessagesListProps = {
    messages: WithIdAndRef<Message>[];
};

const useStyles = makeStyles((_theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gridGap: 8,
            maxHeight: 480,
            overflowY: "auto",
        },
    }),
);

export default function ChatMessagesList({ messages }: ChatMessagesListProps) {
    const styles = useStyles();

    return (
        <Box className={styles.root}>
            {messages.map((message) => (
                <ListItem key={message.id} message={message} />
            ))}
        </Box>
    );
}
