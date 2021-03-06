import { Timestamp, Uid } from "../types";

type Message = {
    content: string;
    createdAt: Timestamp;
    uid: Uid;
    photoURL: string | null;
};

export default Message;
