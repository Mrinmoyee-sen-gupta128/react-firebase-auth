import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjapFMB7P_GFz7lL_HowADMuw4BY0fB5w",
  authDomain: "mrinmoyee-react-auth.firebaseapp.com",
  projectId: "mrinmoyee-react-auth",
  storageBucket: "mrinmoyee-react-auth.firebasestorage.app",
  messagingSenderId: "619965539154",
  appId: "1:619965539154:web:0d96d569d4631754b1508b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);