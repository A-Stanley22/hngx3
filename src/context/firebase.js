import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJF3O0l5EWlw7XRWVg_0sML1rd1nnNJYk",
  authDomain: "hngx-gallery.firebaseapp.com",
  projectId: "hngx-gallery",
  storageBucket: "hngx-gallery.appspot.com",
  messagingSenderId: "845617117653",
  appId: "1:845617117653:web:cd8442c833f9443986655c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)