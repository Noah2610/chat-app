import { useState } from "react";
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    Icon,
    TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export type ChatInputProps = {
    sendMessage: (message: string) => Promise<void>;
};

export default function ChatInput({ sendMessage }: ChatInputProps) {
    const [input, setInput] = useState("");

    return (
        <Box>
            <form
                action="#"
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                    setInput("");
                }}
            >
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        value={input}
                        label="Message"
                        variant="filled"
                        onChange={(e) => setInput(e.currentTarget.value)}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    type="submit"
                                    size="large"
                                    endIcon={<SendIcon />}
                                >
                                    Send
                                </Button>
                            ),
                        }}
                    />
                </FormControl>
            </form>
        </Box>
    );
}
