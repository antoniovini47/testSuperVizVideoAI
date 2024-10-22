import axios from "axios";

// const RECORD_ID = "RECORDING_ID";
// const CLIENT_ID = "YOUR CLIENT ID";
// const SECRET = "Secret here";

async function requestTranscript(recordingId: string, clientId: string, secret: string) {
  try {
    const response = await axios.post(
      "https://api.superviz.com/recordings/transcripts",
      {
        recordingId: recordingId,
        language: "en-US",
      },
      {
        headers: {
          "Content-Type": "application/json",
          client_id: clientId,
          secret: secret,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting transcript:", error);
    throw error;
  }
}
