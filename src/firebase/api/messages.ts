import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions as UseCollectionDataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";
import { Query } from ".";
import { firestore } from "..";
import {
    CollectionReference,
    FirebaseError,
    Message,
    WithIdAndRef,
} from "../types";

export function getMessagesCollection(): CollectionReference<Message> {
    return firestore.collection("messages") as CollectionReference<Message>;
}

export type UseMessagesData = {
    messages: WithIdAndRef<Message>[];
    isLoading: boolean;
    error?: FirebaseError;
};

export function useMessages(
    collection?: CollectionReference<Message>,
    editQueryFn = (query: Query<Message>) => query,
    options: UseCollectionDataOptions<Message> = {},
): UseMessagesData {
    if (!collection) {
        collection = getMessagesCollection();
    }
    const query = editQueryFn(
        collection.orderBy("createdAt", "desc").limit(20),
    );
    const [messages = [], isLoading, error] = useCollectionData<
        Message,
        "id",
        "ref"
    >(query, {
        ...options,
        idField: "id",
        refField: "ref",
    });
    return {
        messages,
        isLoading,
        error,
    };
}
