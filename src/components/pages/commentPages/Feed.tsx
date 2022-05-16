import React, { useEffect, useState } from "react";

import { db, auth } from "../../../firebase";
import { TweetInput } from "./TweetInput";
import styles from "./Feed.module.css";
import { Post } from "./Post";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/react";

export const Feed: React.FC = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);
  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        )
      );
    return () => unSub();
  }, []);
  return (
    <>
      <div className={styles.feed}>
        {!user.uid ? (
          <Button
            style={{ backgroundColor: "gray.400", color: "red" }}
            onClick={() => history.push("/auth")}
          >
            ログイン
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "gray.400", color: "red" }}
            onClick={async () => await auth.signOut()}
          >
            ログアウト
          </Button>
        )}
        <TweetInput disable={!user.uid} />
        {posts[0]?.id && (
          <>
            {posts.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                avatar={post.avatar}
                image={post.image}
                text={post.text}
                timestamp={post.timestamp}
                username={post.username}
                disable={!user.uid}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};
