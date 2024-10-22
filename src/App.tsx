import "./App.css";
import { useState } from "react";
import { SuperVizRoomProvider, VideoConference } from "@superviz/react-sdk";
import getRecordings from "./services/getRecording";

const DEVELOPER_KEY = import.meta.env.VITE_SUPERVIZ_DEVELOPER_KEY;
const collaborationMode = {
  enabled: false,
};

function App() {
  const [userID, setUserID] = useState(false);

  return (
    <>
      <h1>Video AI Test</h1>
      {!userID ? (
        <>
          <input type="text" placeholder="userID" />
          <button
            onClick={() => {
              const input = document.querySelector('input[type="text"]');
              if (input) {
                setUserID(input.value);
              }
            }}>
            Iniciar
          </button>
          <br></br>
          <br></br>
          <button
            onClick={() => {
              console.log("getting recordings...");
              getRecordings().then((recordings) => {
                const textarea = document.querySelector("textarea");
                if (textarea) {
                  textarea.value = JSON.stringify(recordings, null, 2);
                }
              });
            }}>
            getRecordings
          </button>
          <textarea placeholder="Transcript" readOnly></textarea>
        </>
      ) : null}
      {userID ? (
        <SuperVizRoomProvider
          developerKey={DEVELOPER_KEY}
          group={{
            id: "GROUP_ID",
            name: "GROUP_NAME",
          }}
          participant={{
            id: "USER_ID",
            name: "USER_NAME",
          }}
          roomId="ROOM_ID">
          <VideoConference
            onDestroy={() => {
              console.log("Video conference destroyed...generating log");
            }}
            enableRecording={true}
            language="en"
            locales={["enLocale"]}
            participantType="host"
            collaborationMode={collaborationMode}
          />
        </SuperVizRoomProvider>
      ) : null}
    </>
  );
}

export default App;
