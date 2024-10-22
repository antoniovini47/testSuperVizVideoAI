import axios from "axios";

const client_id = import.meta.env.DEV
  ? import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_CLIENT_ID_DEVELOPMENT
  : import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_CLIENT_ID_PRODUCTION;

const secret = import.meta.env.DEV
  ? import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_SECRET_DEVELOPMENT
  : import.meta.env.VITE_API_SECRET_KEY_DEFAULT_NO_EXPIRATION_SECRET_PRODUCTION;

const passphrase = import.meta.env.VITE_SUPERVIZ_SECURITY_KEY;

const getSummary = async (recordingId: string) => {
  try {
    const response = await axios.get(
      `https://api.superviz.com/recordings/transcripts/${recordingId}/summary`,
      {
        headers: {
          "Content-Type": "application/json",
          client_id: client_id,
          secret: secret,
          passphrase: passphrase,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error;
  }
};

export default getSummary;
