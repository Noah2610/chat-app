import { Avatar, Box, Button, CircularProgress } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
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
        <>
            <Box position="absolute" top={0} right={0} margin="8px">
                {isLoading ? (
                    <>
                        <CircularProgress />
                    </>
                ) : (
                    <>
                        {!user ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={signInWithGoogle}
                            >
                                Login
                            </Button>
                        ) : (
                            <>
                                <Avatar src={user.photoURL || ""}>
                                    {user.displayName}
                                </Avatar>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </>
                )}
            </Box>
        </>
    );
}
