import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "../pages/Login/firebase/firebase.init";

// Call Initialize Firebase
initializeFirebase();

export default function useFirebase() {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [customError, setCustomError] = useState("");
  const [admin, setAdmin] = useState(false);

  // ____Register New User+++++++++++++++++++
  const registerNewUser = (email, password, name, history) => {
    setIsLoading(true);
    console.log(email, password, name, history)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal("Good job!", "User create successfully", "success");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        history.replace("/home");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        swal("Something Wrong", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  // ____Login User+++++++++++++++++++
  const loginUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.replace(destination);
        swal("Good job!", "User Login successfully", "success");
      })
      .catch((error) => {
        swal("Something Wrong", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => subscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://safrian.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
      .catch((err) => console.log(err));
  }, [user]);

  // ____Create User Save Database+++++++++
  const data = new Date();
  const saveUser = (email, displayName) => {
    const newUser = { email, displayName, createdAt: data.toString() };
    fetch("https://safrian.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        swal("Something Wrong", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    isLoading,
    registerNewUser,
    loginUser,
    customError,
    logOutUser,
    setCustomError,
    admin,
  };
}
