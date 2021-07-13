import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "../components/Loading";
import firebase from "firebase";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth); //This will tell whather user is logged in or not.

  //We wnat to capture when user logged in first or when user changes logs in or logs out.So use useEffect hook and give [users] as its second argument.(HELPFUL FOR LAST SEEN feature)
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true } //merge:true will help us to update doc for already existing user otherwise .set will always create a new doc.
      );
    }
  }, [user]);

  if (loading) return <Loading />; //For the time page loads ,this Loading page will be seen.
  if (!user) return <Login />; //If user is not logged in the Login page will be rendered to the user.
  return <Component {...pageProps} />; //If user is logged in, then our entire app will be seen.
}

export default MyApp;
