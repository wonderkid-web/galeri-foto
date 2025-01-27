// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCqEh6siSFSAqt9VMNQsLYqe32UQfHGzZM",
//   authDomain: "library-react-49505.firebaseapp.com",
//   projectId: "library-react-49505",
//   storageBucket: "library-react-49505.appspot.com",
//   messagingSenderId: "481130172436",
//   appId: "1:481130172436:web:68f1e73048f3291d135701"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const database = getFirestore(app)
// export const imageDb = getStorage(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqxaTny0Ux26zOfoJe1gvyyYspej9sw5s",
  authDomain: "mahasiswa-21cb0.firebaseapp.com",
  databaseURL: "https://mahasiswa-21cb0-default-rtdb.firebaseio.com",
  projectId: "mahasiswa-21cb0",
  storageBucket: "mahasiswa-21cb0.firebasestorage.app",
  messagingSenderId: "521147196488",
  appId: "1:521147196488:web:815d28487a5d7d5f1b247d",
  measurementId: "G-LMK6DL6B6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// export const imageDb = getStorage(app);
