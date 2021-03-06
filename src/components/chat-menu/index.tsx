import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { getActiveUsersCollection, useActiveUsers } from "../../firebase/api";

export default function ChatMenu() {
    const [user] = useAuthState(auth);

    const usersCollection = getActiveUsersCollection();
    const { users } = useActiveUsers(usersCollection);

    // useEffect(() => {
    //     console.log("ADD ACTIVE USER");

    //     if (user) {
    //         usersCollection.add({
    //             isActive: true,
    //             uid: user.uid,
    //             displayName: user.displayName,
    //             photoURL: user.photoURL,
    //         });
    //     }

    //     return () => {
    //         user &&
    //             usersCollection.add({
    //                 isActive: false,
    //                 uid: user.uid,
    //                 displayName: user.displayName,
    //                 photoURL: user.photoURL,
    //             });
    //     };
    // }, [!!user]);

    console.log(users);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>{user.uid}</div>
            ))}
        </>
    );
}
