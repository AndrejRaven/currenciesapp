import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyB-tCeWjzw2Uf6kV-bwPk02Cnwpxq94PFE',
  authDomain: 'chat-app-c6b84.firebaseapp.com',
  databaseURL: 'https://chat-app-c6b84.firebaseio.com',
  projectId: 'chat-app-c6b84',
  storageBucket: 'chat-app-c6b84.appspot.com',
  messagingSenderId: '879063270047',
  appId: '1:879063270047:web:9dd701fd5d4ee3225858aa',
  measurementId: 'G-GHEWKNH6CC'
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const { user } = res;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout
};
