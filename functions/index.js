const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check if request is an Admin
  if (context.auth.token.admin !== true) {
    return { error: " only Admin can add another admins! " };
  }

  // get user and custom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made as an admin!`,
      };
    })
    .catch((err) => {
      return err;
    });
});
