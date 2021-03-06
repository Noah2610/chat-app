import { Box, BoxProps } from "@material-ui/core";

export type CenteredProps = BoxProps;

export default function Centered(props: CenteredProps) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...props}
        />
    );
}
