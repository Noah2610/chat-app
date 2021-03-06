import {
    createStyles,
    makeStyles,
    Avatar,
    Box,
    Paper,
    Typography,
} from "@material-ui/core";
import { Message } from "../../firebase/types";
import { formatTimestamp } from "../../util";

export type ChatMessageListItemProps = {
    message: Message;
};

const AVATAR_HEIGHT = 48;
const ARROW_SIZE = 16;

const useStyles = makeStyles((theme) =>
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
            backgroundColor: theme.palette.primary.dark,
        },

        arrow: {
            position: "absolute",
            width: ARROW_SIZE,
            height: ARROW_SIZE,
            bottom: AVATAR_HEIGHT / 2 - ARROW_SIZE / 2,
            left: -(ARROW_SIZE / 2),
            backgroundColor: theme.palette.primary.dark,
            boxShadow: "inherit",
            transform: "rotate(45deg)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
        },
    }),
);

export default function ChatMessageListItem({
    message,
}: ChatMessageListItemProps) {
    const styles = useStyles();

    return (
        <Box className={styles.root}>
            <Box className={styles.avatar}>
                {message.photoURL ? <Avatar src={message.photoURL} /> : <></>}
            </Box>
            <Paper className={styles.message} elevation={2}>
                <Box className={styles.arrow} />
                <Box padding={2} paddingBottom={1}>
                    <Typography>{message.content}</Typography>
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
