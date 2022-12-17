import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import{getStorage} from "firebase/storage"
import{getFirestore} from "firebase/firestore"
export const firebaseConfig = {
    apiKey: "AIzaSyBySFHUKXijJ7uxcZCG-ZbJasgRDFnfYaM",
    authDomain: "experience-shala.firebaseapp.com",
    projectId: "experience-shala",
    storageBucket: "experience-shala.appspot.com",
    messagingSenderId: "142306068475",
    appId: "1:142306068475:web:b5fd3e87f0993a3a91ad5e",
    measurementId: "G-KS4517NBPW"
};

// Initialize Firebase
const Userapp = initializeApp(firebaseConfig);
export const UserAuth =getAuth(Userapp);
export const Userdb = getFirestore(Userapp)
export const UserStorage = getStorage(Userapp);
export const Googleprovider = new GoogleAuthProvider(Userapp);
export const db = getFirestore(Userapp)