import React, { useEffect, useState } from "react";
import firebase from "./fbConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          //          console.log(idTokenResult.claims);
          if (idTokenResult.claims.admin) {
            setIsUserAdmin(idTokenResult.claims.admin);
          }
        });
      }
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  //  console.log(currentUser, isUserAdmin);

  if (loading) {
    return <></>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isUserAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
