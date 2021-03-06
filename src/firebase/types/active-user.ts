import { Uid } from ".";

type ActiveUser = {
    uid: Uid;
    displayName: string | null;
    photoURL: string | null;
    isActive: boolean;
};

export default ActiveUser;
