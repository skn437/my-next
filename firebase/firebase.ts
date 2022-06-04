import admin from 'firebase-admin';
import firebaseConfig from "@/firebase/firebaseConfig";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

const db = admin.firestore();

export { db };