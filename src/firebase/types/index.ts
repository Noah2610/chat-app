import firebase from "firebase/app";

export type { default as Message } from "./message";

export type Uid = string;
export type User = firebase.User;
export type FieldValue = firebase.firestore.FieldValue;
export type ServerTimestamp = FieldValue;
export type DocumentData = firebase.firestore.DocumentData;
export type CollectionReference<T> = firebase.firestore.CollectionReference<
    T & DocumentData
>;
