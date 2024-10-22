import "./App.css";
import getRecordings from "./services/getRecording";
import generateTranscriptRequest from "./services/generateTranscriptRequest";
import getRecordingsWithTranscriptionReady from "./services/getRecordingsWithTranscriptionReady";
import getTranscript from "./services/getTranscript";

function App() {
  return (
    <>
      <h1>Video AI Test</h1>

      {/* Get all recordings */}
      <h3>Etapa 1 - Get all recordings</h3>
      <button
        onClick={() => {
          console.log("getting recordings...");
          getRecordings().then((recordings) => {
            const textarea = document.getElementById("textAreaRecordings") as HTMLTextAreaElement;
            if (textarea) {
              textarea.value = JSON.stringify(recordings, null, 2);
            }
          });
        }}>
        Get all recordings
      </button>
      <textarea
        style={{ height: 50, width: 1000 }}
        id="textAreaRecordings"
        placeholder="Recordings..."></textarea>
      <br></br>
      <br></br>
      {/*  */}

      {/* Generate transcript - it has to wait */}
      <h3>Etapa 2 - Solicitar transcrição - tem que esperar</h3>
      <input id="inputRecordingID" placeholder="Recording ID"></input>
      <button
        onClick={() => {
          const recordingId = (document.getElementById("inputRecordingID") as HTMLInputElement)
            .value;
          console.log("generating transcript for recordingId:", recordingId);
          generateTranscriptRequest(recordingId)
            .then(() => console.log("Transcript requested"))
            .catch((error) => console.error("Error generating transcript request:", error));
        }}>
        Request to generate transcript
      </button>
      <br></br>
      <br></br>
      {/*  */}

      {/* Get recordings with transcription ready */}
      <h3>Etapa 3 - Solicitar todas as gravações, com transcrição</h3>
      <button
        onClick={() => {
          console.log("getting recordings with transcription ready...");
          getRecordingsWithTranscriptionReady().then((recordings) => {
            const textarea = document.getElementById(
              "textAreaRecordingsWithTranscriptionReady"
            ) as HTMLTextAreaElement;
            if (textarea) {
              textarea.value = JSON.stringify(recordings, null, 2);
            }
          });
        }}>
        Get recordings with transcription ready
      </button>
      <textarea
        style={{ height: 50, width: 1000 }}
        id="textAreaRecordingsWithTranscriptionReady"
        placeholder="Recordings with transcription ready..."
        readOnly></textarea>
      <br></br>
      <br></br>
      {/*  */}

      {/* get Transcript */}
      <h3>Etapa 4 - Solicitar transcrição da gravação</h3>
      <input
        id="inputRecordingIDForGetTranscript"
        placeholder="Recording ID for get transcript"></input>
      <button
        onClick={() => {
          const recordingId = (
            document.getElementById("inputRecordingIDForGetTranscript") as HTMLInputElement
          ).value;
          console.log("getting transcript for recordingId:", recordingId);
          getTranscript(recordingId)
            .then((transcript) => {
              const textarea = document.getElementById("textAreaTranscript") as HTMLTextAreaElement;
              if (textarea) {
                textarea.value = JSON.stringify(transcript, null, 2);
              }
            })
            .catch((error) => console.error("Error getting transcript:", error));
        }}>
        Get transcript
      </button>
      <textarea
        style={{ height: 50, width: 1000 }}
        id="textAreaTranscript"
        placeholder="Transcript..."
      />
    </>
  );
}

export default App;
