import { Box, Button, CircularProgress, IconButton } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import UserAvatar from "./user-avatar";
import { auth } from "../firebase";

export default function Login() {
    const [user, isLoading] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
    const logout = () => {
        auth.signOut();
    };

    return (
        <Box>
            {isLoading ? (
                <>
                    <CircularProgress />
                </>
            ) : (
                <>
                    {!user ? (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={signInWithGoogle}
                        >
                            Login
                        </Button>
                    ) : (
                        <IconButton>
                            <Box borderRadius={4} boxShadow={4}>
                                <UserAvatar
                                    variant="rounded"
                                    src={user.photoURL}
                                    name={user.displayName}
                                    email={user.email}
                                />
                            </Box>
                        </IconButton>
                    )}
                </>
            )}
        </Box>
    );
}
