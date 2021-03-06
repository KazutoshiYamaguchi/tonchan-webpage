import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./Post.module.css";
import firebase from "firebase/app";
import { db } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

interface Props {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
  disable: boolean;
}
interface Comment {
  id: string;
  avatar: string;
  text: string;
  timestamp: any;
  username: string;
}
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

export const Post: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { postId, avatar, image, text, timestamp, username, disable } = props;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Array<Comment>>();
  const [openComments, setOpenComments] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const unSub = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        )
      );
    return () => unSub();
  }, [postId]);

  const newComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      avatar: user.photoUrl,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });
    setComment("");
  };
  return (
    <div className={styles.post}>
      <div className={styles.post_avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={styles.post_body}>
        <div>
          <div className={styles.post_header}>
            <h3>
              <span className={styles.post_headerUser}>@{username}</span>
              <span className={styles.post_headerTime}>
                {new Date(timestamp?.toDate()).toLocaleDateString()}
              </span>
            </h3>
          </div>
          <div className={styles.post_tweet}>
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <div className={styles.post_tweetImage}>
            <img src={image} alt="tweet" />
          </div>
        )}
        <MessageIcon
          className={styles.post_commentIcon}
          onClick={() => setOpenComments(!openComments)}
        />
        {openComments && (
          <>
            {comments?.map((comment) => (
              <div key={comment.id} className={styles.post_comment}>
                <Avatar src={comment.avatar} className={classes.small} />
                <span className={styles.post_commentUser}>
                  @{comment.username}
                </span>
                <span className={styles.post_commentText}>{comment.text}</span>
                <span className={styles.post_headerTime}>
                  {new Date(comment.timestamp?.toDate()).toLocaleString()}
                </span>
              </div>
            ))}
            <form onSubmit={newComment}>
              <div className={styles.post_form}>
                <input
                  className={styles.post_input}
                  type="text"
                  placeholder={
                    user.uid ? "?????????????????????" : "????????????????????????????????????"
                  }
                  value={comment}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setComment(e.target.value)
                  }
                  disabled={disable}
                />
                <button
                  disabled={!comment}
                  className={
                    comment ? styles.post_button : styles.post_buttonDisable
                  }
                  type="submit"
                >
                  <SendIcon className={styles.post_sendIcon} />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
