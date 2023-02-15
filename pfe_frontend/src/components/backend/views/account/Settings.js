import React,{useState} from "react";

// components/backend

import CardSettings from "components/backend/Cards/CardSettings.js";
import CardProfile from "components/backend/Cards/CardProfile.js";
import firebase from "firebase"
export default function Settings() {
  const [user,setUser]=useState(firebase.auth().currentUser)
   return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings user={user} setUser={setUser}/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={user}/>
        </div>
      </div>
    </>
  );
}
