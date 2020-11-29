import { firestore } from "firebase/app";

export interface News {
  uid: firestore.CollectionReference;
  title: string;
  content: string;
  imgLarge?: string;
  imgSmall?: string;
  date?: firestore.Timestamp;
}
