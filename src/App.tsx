import "./App.css";
import { useState } from "react";
import { SuperVizRoomProvider, VideoConference } from "@superviz/react-sdk";

const DEVELOPER_KEY = import.meta.env.VITE_SUPERVIZ_DEVELOPER_KEY;
const collaborationMode = {
  enabled: false,
};

function App() {
  const [userID, setUserID] = useState(false);

  return (
    <>
      <h1>Vite + React</h1>
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
