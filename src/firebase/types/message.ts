import { DocumentData, ServerTimestamp, Uid } from "../types";

type Message =
    | {
          content: string;
          createdAt: ServerTimestamp;
          uid: Uid;
          photoURL: string | null;
      }
    | DocumentData;

export default Message;
