import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHUKMz9ZGyylneOMSrozGeUsZ1RAWAsuY",
  authDomain: "dynweb-10155.firebaseapp.com",
  projectId: "dynweb-10155",
  storageBucket: "dynweb-10155.appspot.com",
  messagingSenderId: "10605716184",
  appId: "1:10605716184:web:c59f8de070b0c0eccaadad",
  measurementId: "G-0ZPEBPFK6L",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
// export const db = getFirestore(app);
