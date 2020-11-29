import { firestore } from 'firebase/app';

export interface Church {
  uid: firestore.CollectionReference;
  address: string;
  name: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  schedule?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
  location?: firestore.GeoPoint
}
