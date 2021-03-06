import { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import theme from "../theme";

export default function App({ pageProps, Component }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
