import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../features/userSlice";
import { auth } from "../../../firebase";

import { Feed } from "./Feed";
import styles from "./App.module.css";

export const Kuchikomi: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  return (
    <>
      <div className={styles.app}>
        <Feed />
      </div>
    </>
  );
};
