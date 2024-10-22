import axios from "axios";

const client_id = import.meta.env.DEV
  ? import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_CLIENT_ID_DEVELOPMENT
  : import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_CLIENT_ID_PRODUCTION;

const secret = import.meta.env.DEV
  ? import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_SECRET_DEVELOPMENT
  : import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_SECRET_PRODUCTION;

async function requestGenerateTranscript(recordingId: string) {
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
          client_id: client_id,
          secret: secret,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating transcript request:", error);
    throw error;
  }
}

export default requestGenerateTranscript;
