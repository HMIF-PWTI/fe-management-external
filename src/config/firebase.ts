import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const requiredFirebaseEnvironment = {
  VITE_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_DATABASE_URL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const missingFirebaseEnvironment = Object.entries(
  requiredFirebaseEnvironment,
)
  .filter(([, value]) => !value?.trim())
  .map(([key]) => key);

if (missingFirebaseEnvironment.length > 0) {
  throw new Error(
    `[Firebase] Environment variable wajib belum diisi: ${missingFirebaseEnvironment.join(", ")}`,
  );
}

const firebaseConfig = {
  apiKey: requiredFirebaseEnvironment.VITE_FIREBASE_API_KEY,
  authDomain: requiredFirebaseEnvironment.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: requiredFirebaseEnvironment.VITE_FIREBASE_PROJECT_ID,
  storageBucket: requiredFirebaseEnvironment.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    requiredFirebaseEnvironment.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: requiredFirebaseEnvironment.VITE_FIREBASE_APP_ID,
  databaseURL: requiredFirebaseEnvironment.VITE_FIREBASE_DATABASE_URL,
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const database = getDatabase(firebaseApp);
