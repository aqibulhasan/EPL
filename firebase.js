 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase,ref } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBVm9gIP409t_lcgWmPSd15QltNetwnpZM",
    authDomain: "epl-stream-51465.firebaseapp.com",
    projectId: "epl-stream-51465",
    storageBucket: "epl-stream-51465.firebasestorage.app",
    messagingSenderId: "326063123293",
    appId: "1:326063123293:web:e7205c6760fa22214456b4",
    databaseURL: "https://epl-stream-51465-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dataRef = ref(db, 'scoreboardData');

  export { db, dataRef };
