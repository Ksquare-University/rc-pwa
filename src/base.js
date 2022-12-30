//  RC-PWA APP Config file
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export default app;

  