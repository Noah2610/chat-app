import firebase from "firebase/app";
import { FieldValue } from ".";

export type { default as Message } from "./message";
export type Uid = string;
export type ServerTimestamp = FieldValue;

export type { User } from "@firebase/auth-types";
export type {
    FieldValue,
    DocumentData,
    CollectionReference,
    QuerySnapshot,
} from "@firebase/firestore-types";
export type FirebaseError = firebase.FirebaseError;
