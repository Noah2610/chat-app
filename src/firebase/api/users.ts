import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions as UseCollectionDataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";
import { Query } from ".";
import { firestore } from "..";
import {
    CollectionReference,
    FirebaseError,
    ActiveUser,
    WithId,
} from "../types";

export function getActiveUsersCollection(): CollectionReference<ActiveUser> {
    return firestore.collection(
        "active-users",
    ) as CollectionReference<ActiveUser>;
}

export type UseActiveUsersData = {
    users: WithId<ActiveUser>[];
    isLoading: boolean;
    error?: FirebaseError;
};

export function useActiveUsers(
    collection?: CollectionReference<ActiveUser>,
    editQueryFn = (query: Query<ActiveUser>) => query,
    options: UseCollectionDataOptions<ActiveUser> = {},
): UseActiveUsersData {
    if (!collection) {
        collection = getActiveUsersCollection();
    }
    const query = editQueryFn(collection.limit(20));
    const [users = [], isLoading, error] = useCollectionData<ActiveUser, "id">(
        query,
        {
            ...options,
            idField: "id",
        },
    );
    return {
        users,
        isLoading,
        error,
    };
}
