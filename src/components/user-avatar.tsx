import { Avatar, AvatarProps } from "@material-ui/core";
import { getNameInitials } from "../util";

export type UserAvatarProps = {
    name?: string | null;
    email?: string | null;
    src?: string | null;
} & Omit<AvatarProps, "src">;

export default function UserAvatar({
    name,
    email,
    src,
    ...props
}: UserAvatarProps) {
    return (
        <Avatar src={src || undefined} {...props}>
            {(!!name && getNameInitials(name)) ||
                (!!email && getNameInitials(email, { isEmail: true })) ||
                ""}
        </Avatar>
    );
}
