import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import { firestore } from "../firebase";

const CommentForm = ({ slug }) => {
  const { loginWithPopup, user, logout } = useAuth0();
  const [comment, setComment] = useState("");

  const sendComment = () => {
    firestore
      .collection(`blog/${slug}/comments`)
      .add({
        time: Date(),
        comment,
        userPicture: user.picture,
        userEmail: user.email,
        userName: user.name,
      })
      .then(setComment(""))
      .catch((err) => console.log(err));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 border-t border-gray-200 py-12">
        {user ? (
          <div
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex-none bg-cover"
            style={{
              backgroundImage: `url(${user.picture})`,
            }}
          ></div>
        ) : (
          ""
        )}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="rounded-lg border border-gray-200 w-full h-36 focus:outline-none px-4 py-2 ring-0 focus:ring-4 ring-blue-200 transition"
        />
      </div>
      <div className="text-right space-x-4">
        {user ? (
          <>
            <Button onClick={sendComment} color="blue">
              Yorumu gönder
            </Button>
            <Button onClick={logout}>Çıkış yap</Button>
          </>
        ) : (
          <Button onClick={loginWithPopup}>Giriş Yap</Button>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
