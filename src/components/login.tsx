import { Box, Button, CircularProgress } from "@material-ui/core";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Login() {
    const [user, isLoading] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
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
                            <Button variant="contained" color="primary">
                                Logout
                            </Button>
                        )}
                    </>
                )}
            </Box>
        </>
    );
}
