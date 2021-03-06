import firebase from "firebase/app";
import { FieldValue } from ".";

export type { default as Message } from "./message";
export type Id = string;
export type Ref = string;
export type Uid = string;
export type ServerTimestamp = FieldValue;
export type WithId<T> = T & { id: Id };
export type WithRef<T> = T & { ref: Ref };
export type WithIdAndRef<T> = WithId<WithRef<T>>;

export type { User } from "@firebase/auth-types";
export type {
    FieldValue,
    DocumentData,
    CollectionReference,
    QuerySnapshot,
} from "@firebase/firestore-types";
export type FirebaseError = firebase.FirebaseError;
