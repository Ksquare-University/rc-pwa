//  RC-PWA APP Config file
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

// real project's firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCj9KeY-Sc9yKem8G0szl1fh28B5FSK2Bg",
    authDomain: "rappi-clone-itk.firebaseapp.com",
    projectId: "rappi-clone-itk",
    storageBucket: "rappi-clone-itk.appspot.com",
    messagingSenderId: "577258984785",
    appId: "1:577258984785:web:5a4515ef3db7ec9f346f70",
    measurementId: "G-NX1GS5PB21"
};

// personal firebase for tests
// const firebaseConfig = {
//   apiKey: "AIzaSyA3ZUOvBQoCm17VCjmy2vmeJthROUm7aHY",
//   authDomain: "rappi-clone-30001.firebaseapp.com",
//   projectId: "rappi-clone-30001",
//   storageBucket: "rappi-clone-30001.appspot.com",
//   messagingSenderId: "199308072088",
//   appId: "1:199308072088:web:7f6a317761af9a3dfdeced",
//   measurementId: "G-EDV9HF1EJR",
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
