import React from "react";
import { auth } from "../firebase.config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
    } else {
      navigate("/signin");
    }
  });

  return (
    <section className="bg-emerald-500  h-screen">
      <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6 pt-2">
        Home page
      </h1>
      <div className="m-4">
        <button
          onClick={() => {
            signOut(auth);
          }}
          className="bg-emerald-600  px-3 flex gap-1 items-center justify-center py-2.5 text-white rounded"
        >
          <span>LOGOUT</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
