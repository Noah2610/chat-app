import { memo } from "react";
import {
    Avatar,
    Box,
    Paper,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import { Message, Uid } from "../../firebase/types";
import { formatTimestamp } from "../../util";

export type ChatMessageListItemProps = {
    message: Message;
    loggedInUid: Uid;
};

type StylesProps = {
    isLoggedInUserMessage: boolean;
};

const AVATAR_HEIGHT = 48;
const ARROW_SIZE = 16;

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: ARROW_SIZE / 2,
        },

        avatar: {
            width: AVATAR_HEIGHT,
            height: AVATAR_HEIGHT,
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
        },

        message: {
            position: "relative",
            color: theme.palette.text.primary,
            backgroundColor: ({ isLoggedInUserMessage }) =>
                isLoggedInUserMessage
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
        },

        content: {
            fontSize: theme.typography.body1.fontSize,

            "& > p:first-child": {
                marginTop: 0,
            },

            "& > p:last-child": {
                marginBottom: 0,
            },
        },

        arrow: {
            position: "absolute",
            width: ARROW_SIZE,
            height: ARROW_SIZE,
            bottom: AVATAR_HEIGHT / 2 - ARROW_SIZE / 2,
            left: -(ARROW_SIZE / 2),
            backgroundColor: ({ isLoggedInUserMessage }) =>
                isLoggedInUserMessage
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
            boxShadow: "inherit",
            transform: "rotate(45deg)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        },
    }),
);

function ChatMessageListItem({
    message,
    loggedInUid,
}: ChatMessageListItemProps) {
    const isLoggedInUserMessage = loggedInUid === message.uid;
    const styles = useStyles({ isLoggedInUserMessage });

    return (
        <Box className={styles.root}>
            <Box className={styles.avatar}>
                {message.photoURL ? <Avatar src={message.photoURL} /> : <></>}
            </Box>
            <Paper className={styles.message} elevation={2}>
                <Box className={styles.arrow} />
                <Box padding={2} paddingBottom={1}>
                    <ReactMarkdown className={styles.content}>
                        {message.content}
                    </ReactMarkdown>
                    <Box marginTop={1}>
                        <Typography variant="caption" color="textSecondary">
                            {formatTimestamp(message.createdAt)}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default memo(
    ChatMessageListItem,
    (
        { message: messageA, loggedInUid: loggedInUidA },
        { message: messageB, loggedInUid: loggedInUidB },
    ) =>
        messageA.content === messageB.content &&
        messageA.createdAt?.seconds === messageB.createdAt?.seconds &&
        messageA.photoURL === messageB.photoURL &&
        loggedInUidA === loggedInUidB,
);
