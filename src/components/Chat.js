import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__header-info">
          <h3>{roomName}</h3>

          <p>Last seen at ...</p>
        </div>

        <div className="chat__header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__body-message ${true && "chat__body-receiver"}`}>
          <span className="chat__body-message-name ">Hello</span>
          Hey
          <span className="chat__body-message-timestamp">3:52 pm</span>
        </p>
        <p className={`chat__body-message ${true && "chat__body-receiver"}`}>
          <span className="chat__body-message-name ">Hello</span>
          Hey
          <span className="chat__body-message-timestamp">3:52 pm</span>
        </p>
        <p className={`chat__body-message ${true && "chat__body-receiver"}`}>
          <span className="chat__body-message-name ">Hello</span>
          Hey
          <span className="chat__body-message-timestamp">3:52 pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>

        <Mic />
      </div>
    </div>
  );
}

export default Chat;
