import React, { useEffect, useState } from "react";

import { auth, db } from "../config/firebase";
// getDoc to GET information from firestore
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  // variable storing userData
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    // When user not logged in => auth empty
    // When user IS logged in => populated with some details
    auth.onAuthStateChanged(async (user) => {
      // Log current user (but only uid, email etc)
      console.log(user);
      // Using doc(), use uid to locate doc containing additional details from Firebase
      const docReference = doc(db, "Users", user.uid);
      // Using getDoc(), get the details in the doc
      const docResult = await getDoc(docReference);
      if (docResult.exists()) {
        setUserDetails(docResult.data());
        console.log(docResult.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      // bring user back to login screen 
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt=""
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome to NUSharousell {userDetails.firstName} 🙏🙏</h3>
          <div>
            {/* <p>Email: {userDetails.email}</p> */}
            {/* <p>First Name: {userDetails.firstName}</p> */}
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button
            className="logout-button" 
            onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;
