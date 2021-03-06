import { Typography, TypographyProps } from "@material-ui/core";

type HeadingProps = {
    children: React.ReactNode;
} & TypographyProps;

export default function Heading({ children, ...props }: HeadingProps) {
    return (
        <Typography variant="h1" {...props}>
            {children}
        </Typography>
    );
}
