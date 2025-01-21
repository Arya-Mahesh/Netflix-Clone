
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-xglfVx5hOHoKew0OhvIx_F_T0wtHS0o",
  authDomain: "netflix-f6a1b.firebaseapp.com",
  projectId: "netflix-f6a1b",
  storageBucket: "netflix-f6a1b.firebasestorage.app",
  messagingSenderId: "53199863961",
  appId: "1:53199863961:web:7bbea7b0fc5f8a45e7b808",
  measurementId: "G-JT2TX18V9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=> {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


const login = async(email,password)=> {
try {
    await signInWithEmailAndPassword(auth,email,password);

} catch (error) {
  console.log(error);
  toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const logout = ()=>{
  signOut(auth);
}

export {auth,db, login, signup, logout};