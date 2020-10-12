import firebase from "./fbConfig";

const register = (email, password, display) => {
  console.log(email);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return firebase
        .firestore()
        .collection("user")
        .doc(res.user.uid)
        .set({ display: display });
    })
    .catch((err) => {
      alert(err);
    });
};

const Login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err);
    });
};

const logOut = () => {
  firebase.auth().signOut();
};

const addAdmin = (email) => {
  const addAdminRole = firebase.functions().httpsCallable("addAdminRole");

  addAdminRole({ email: email }).then((result) => {
    console.log(result);
  });
};

export { register, Login, logOut, addAdmin };
