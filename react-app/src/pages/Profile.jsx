import React from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { useContext } from "react";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
