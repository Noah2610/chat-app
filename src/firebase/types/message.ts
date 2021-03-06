import { DocumentData, Timestamp, Uid } from "../types";

type Message =
    | {
          content: string;
          createdAt: Timestamp;
          uid: Uid;
          photoURL: string | null;
      }
    | DocumentData;

export default Message;
