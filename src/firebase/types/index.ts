import firebase from "firebase/app";

export type { default as Message } from "./message";
export type Id = string;
export type Ref = any;
export type Uid = string;
export type WithId<T> = T & { id: Id };
export type WithRef<T> = T & { ref: Ref };
export type WithIdAndRef<T> = WithId<WithRef<T>>;
export type Timestamp = firebase.firestore.Timestamp | null;
export type FirebaseError = firebase.FirebaseError;

export type { User } from "@firebase/auth-types";
export type {
    CollectionReference,
    DocumentData,
    FieldValue,
    QuerySnapshot,
} from "@firebase/firestore-types";
