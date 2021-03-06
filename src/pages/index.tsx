import { Box } from "@material-ui/core";
import App from "../components/app";

export default function Home() {
    return (
        <>
            <Box maxWidth="640px" marginX="auto">
                <App />
            </Box>
        </>
    );
}
