import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './components/Auth';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <AuthProvider>
     <App />
   </AuthProvider>
  </React.StrictMode>
);


// root.render(
//   // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//     <Suspense fallback={'Conectando ...'}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Suspense>
//   // </FirebaseAppProvider>
// );
